"use client"
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
// import html2canvas from 'html2canvas';
//@ts-ignore
// import html2pdf from 'html2pdf.js';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  userCompany: string;
  clientCompany: string;
}
interface InvoiceData {
  id: number;
  issuedDate: Date | null;
  dueDate: Date | null;
}
interface CompanyState {
  client: boolean;
  user: boolean;
}

const InvoicePage = () => {
  const componentRef = useRef<any | null>(null);
  const [tax, setTax] = useState(0)
  const [memo, setMemo] = useState<string>('');
  const [company, setCompany] = useState<CompanyState>({
    client: false,
    user: false,
  });



  const handleMemoChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(event.target.value);
  };

  /* ----------------------------- date formatted ----------------------------- */
  function formatDate(date: Date | string | null): string {

    if (typeof date === 'string') {
      // Assuming the date string is in a format that can be parsed by Date constructor
      const parsedDate = new Date(date);

      if (!isNaN(parsedDate.getTime())) {
        return parsedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) || '';
      }
    } else if (date instanceof Date && !isNaN(date.getTime())) {
      console.log(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) || '');
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) || '';
    }

    return '';
  }


  /* ----------------------------- all about items ---------------------------- */
  const [items, setItems] = useState<Array<{ item: string; qty: number; price: number; total: number }>>([
    // Initial item if needed
    { item: '', qty: 1, price: 20000, total: 20000 }
  ]);
  const addItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      { item: '', qty: 0, price: 0, total: 0 },
    ]);
  };
  const deleteItem = (index: number) => {
    setItems((prevItems) => [...prevItems.slice(0, index), ...prevItems.slice(index + 1)]);
  };
  const updateItem = (index: number, field: string, value: string | number) => {
    setItems((prevItems) => {
      calculateSubtotal()
      const updatedItems = [...prevItems];
      const updatedItem = { ...updatedItems[index], [field]: value };

      // Calculate total
      if (field === 'qty' || field === 'price') {
        updatedItem.total = updatedItem.qty * updatedItem.price;
      }

      updatedItems[index] = updatedItem;
      return updatedItems;
    });
  };


  /* ------------------------- all about personal data ------------------------ */
  const [personalData, setPersonalData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    userCompany: '',
    clientCompany: '',
  });
  const [clientsData, setClientsData] = useState<FormData>(
    {
      firstName: '',
      lastName: '',
      email: '',
      userCompany: '',
      clientCompany: '',
    });
  const handleInputChangePersonal = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setPersonalData((prevForms) => ({
      ...prevForms,
      [name]: value,
    }));
  };
  const handleInputChangeClient = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setClientsData((prevForms) => ({
      ...prevForms,
      [name]: value,
    }));
  };


  /* ------------------------- All about invoice data ------------------------- */
  const [invoice, setInvoice] = useState<InvoiceData>({
    id: 0,
    issuedDate: null,
    dueDate: null,
  });
  const handleInputChangeInvoice = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setInvoice((prevForms) => ({
      ...prevForms,
      [name]: value,
    }));
  };
  const calculateSubtotal = () => {
    return items.reduce((acc, item) => acc + item.total, 0);
  };
  const handleTaxInputChange = (e: { target: { value: any; }; }) => {
    const inputValue = e.target.value;

    // Check if the input is empty or not a valid number
    if (inputValue === '' || isNaN(inputValue)) {
      setTax(0);
    } else {
      const newTaxValue = parseFloat(inputValue);
      setTax(newTaxValue);
    }
  };

  const handleSave = useReactToPrint({
    content: () => { return componentRef.current; },
    documentTitle: `invoice-${invoice.id}`,
    onAfterPrint: async () => {
      alert("Print Success");

    }
  })


  const handlePrint = async()=>{

      // // Generate PDF from the container
      const content = componentRef.current;

      // const pdfBlob = await html2pdf(content);
      // const blobPdf = pdfBlob instanceof Blob ? pdfBlob : new Blob([pdfBlob], { type: 'application/pdf' });
      
      // const formData = new FormData();
      // formData.append('pdf', blobPdf, `invoice-${invoice.id}.pdf`);
      
      // try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint to save the PDF
      // const response = await fetch('http://localhost:4000/upload', {
      //   method: 'POST',
      //   body: formData,
      //   headers: {
      //     // Omitting 'Content-Type' because FormData handles it
      //   },
      // });

      // if (response.ok) {
      //   const responseData = await response.json(); // Assuming the server returns JSON
      //   console.log(responseData);
      // } else {
      //   console.error('Failed to upload file');
      // }
      // } catch (error) {
      // Handle errors (e.g., show an error message)
      // console.error('Error sending PDF to the database:', error);
      // }
  // )
}
  






  const subtotal = calculateSubtotal();

  const handleChangeCompany = (field: keyof CompanyState) => {
    console.log(field);

    setCompany((prevCompany) => ({
      ...prevCompany,
      [field]: !prevCompany[field], // Toggle the boolean value
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can perform further actions with formArray here
    console.log('Form data submitted:', clientsData, personalData);
  };


  return (
    <div className="mt-20">
      {/* -------------------------------------------------------------------------- */
        /*                                  top part                                  */
        /* -------------------------------------------------------------------------- */}
      <div className="mx-20 flex flex-col items-center gap-5">
        <span className="text-center font-Tobias text-7xl">Free invoice generator and PDF download <span className="font-Inter font-bold">for freelancers</span></span>
        <span className="w-7/12 text-center text-2xl text-gray-500">Create invoices online customized for your freelance business and download as a PDF using our free invoice generator.</span>
        <button className="btn-primary">Create free Invoice</button>
      </div>

      {/* -------------------------------------------------------------------------- */
      /*                                 bottom part                                */
      /* -------------------------------------------------------------------------- */}
      <div className="m-5 flex gap-5">
        {/* ---------------------------------- form ---------------------------------- */}
        <div className="flex w-8/12 flex-col gap-10 p-10 font-Inter shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <h1 className="text-3xl">Create your Invoice</h1>

          {/* ------------------------------ Personal Info ----------------------------- */}
          <div className="personalInfo flex gap-20">
            {/* yours info */}
            <div className="flex w-1/2 flex-col gap-3">
              <span className="text-sm">Your info</span>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    id='firstName'
                    name="firstName"
                    value={personalData.firstName}
                    onChange={(e) => handleInputChangePersonal(e)}
                    placeholder="First Name"
                    className="w-1/2 rounded-lg border border-gray-400 px-3 py-4 placeholder-gray-600"
                    required />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={personalData.lastName}
                    onChange={(e) => handleInputChangePersonal(e)}
                    placeholder="Last Name"
                    className="w-1/2 rounded-lg border border-gray-400 px-3 py-4 placeholder-gray-600"
                    required />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={personalData.email}
                  onChange={(e) => handleInputChangePersonal(e)}
                  placeholder="E-Mail"
                  className="w-full rounded-lg border border-gray-400 px-3 py-4 text-center placeholder-gray-600"
                  required />
                {
                  company.user &&
                  <input
                    type="text"
                    id="userCompany"
                    name="userCompany"
                    value={personalData.userCompany}
                    onChange={(e) => handleInputChangePersonal(e)}
                    placeholder="Enter your company (optional)"
                    className="w-full rounded-lg border border-gray-400 px-3 py-4 text-center placeholder-gray-600"
                    required />}
              </form>

              {
                !company.user &&
                <button
                  onClick={() => handleChangeCompany('user')}
                  className="w-fit rounded-full bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300"> + Company</button>}
            </div>

            {/* Client's info */}
            <div className="flex w-1/2 flex-col gap-3">
              <span className="text-sm">Client&apos;s info</span>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={clientsData.firstName}
                    onChange={(e) => handleInputChangeClient(e)}
                    placeholder="First Name"
                    className="w-1/2 rounded-lg border border-gray-400 px-3 py-4 placeholder-gray-600"
                    required />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={clientsData.lastName}
                    onChange={(e) => handleInputChangeClient(e)}
                    placeholder="Last Name"
                    className="w-1/2 rounded-lg border border-gray-400 px-3 py-4 placeholder-gray-600"
                    required />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={clientsData.email}
                  onChange={(e) => handleInputChangeClient(e)}
                  placeholder="E-Mail"
                  className="w-full rounded-lg border border-gray-400 px-3 py-4 text-center placeholder-gray-600"
                  required />
                {
                  company.client &&
                  <input
                    type="text"
                    id="clientCompany"
                    name="clientCompany"
                    value={clientsData.clientCompany}
                    onChange={(e) => handleInputChangeClient(e)}
                    placeholder="Enter your company (optional)"
                    className="w-full rounded-lg border border-gray-400 px-3 py-4 text-center placeholder-gray-600"
                    required />}
              </form>
              {
                !company.client &&
                <button
                  onClick={() => handleChangeCompany('client')}
                  className="w-fit rounded-full bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300"> + Company</button>
              }
            </div>
          </div>


          <hr className="h-[2px] bg-gray-300" />

          {/* ------------------------------ Invoice Info ------------------------------ */}
          <div className="flex flex-col gap-3">
            <span className="text-sm">Invoice Info</span>
            <div className="flex gap-3">
              <div className="flex w-1/3 flex-col rounded-lg border border-gray-400">
                <span className="px-2 pt-3 text-gray-600">Invoice #</span>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={invoice.id}
                  onChange={handleInputChangeInvoice}
                  placeholder="123.. "
                  className="rounded-lg px-2 focus:outline-none"
                />
              </div>
              <div className="flex w-1/3 flex-col rounded-lg border border-gray-400">
                <span className="px-2 pt-3 text-gray-600">Issued Date</span>
                <input
                  type="date"
                  id="issuedDate"
                  name="issuedDate"
                  onChange={handleInputChangeInvoice}
                  placeholder="123.. "
                  className="rounded-lg px-2 focus:outline-none"
                />
              </div>
              <div className="flex w-1/3 flex-col rounded-lg border border-gray-400">
                <span className="px-2 pt-3 text-gray-600">Due Date</span>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  onChange={handleInputChangeInvoice}
                  placeholder="123.. "
                  className="rounded-lg px-2 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <hr className="h-[2px] bg-gray-300" />

          {/* ------------------------------ Items to bill ----------------------------- */}
          <div className="flex flex-col gap-3">
            <span className="text-sm">Items to Bill</span>
            {items.map((item, index) => (
              <div key={index} className="flex">
                <div className="flex w-8/12 gap-3">
                  <label htmlFor="item" className="flex w-6/12 flex-col">
                    Item
                    <input
                      type="text"
                      value={item.item}
                      id="item"
                      onChange={(e) => updateItem(index, 'item', e.target.value)}
                      placeholder="Item"
                      className="rounded-xl border border-gray-400 p-2"
                    />
                  </label>
                  <label htmlFor="qty" className="flex w-3/12 flex-col">
                    QTY
                    <input
                      type="number"
                      id="qty"
                      value={item.qty}
                      onChange={(e) => updateItem(index, 'qty', parseInt(e.target.value, 10))}
                      className="rounded-xl border border-gray-400 p-2"
                    />
                  </label>
                  <label htmlFor="price" className="flex w-3/12 flex-col">
                    PRICE
                    <input
                      type="number"
                      id="price"
                      value={item.price}
                      onChange={(e) => updateItem(index, 'price', parseInt(e.target.value, 10))}
                      className="rounded-xl border border-gray-400 p-2"
                    />
                  </label>
                </div>
                <div className="flex w-4/12 justify-end">
                  <label htmlFor="" className="flex w-5/12 flex-col" >
                    Total
                    <input
                      type="number"
                      value={item.total}
                      onChange={(e) => updateItem(index, 'total', parseInt(e.target.value, 10))}
                      className="rounded-xl p-2"
                      readOnly
                    />
                  </label>
                  <button onClick={() => deleteItem(index)} className="text-gray-500">
                    <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" fill="currentColor"></path>
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" fill="currentColor"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            <button onClick={addItem} className="w-fit rounded-full bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300"> + New Item</button>
          </div>

          <hr className="h-[2px] bg-gray-300" />

          {/* ---------------------------------- memo ---------------------------------- */}
          <div className="memoInfo flex gap-10">
            <div className="flex w-4/12 flex-col text-sm">
              <span className="text-sm">MEMO</span>
              <textarea value={memo}
                onChange={handleMemoChange}
                name="memo" id="memo" className="rounded-xl border border-gray-500 px-1 py-2 text-base focus:outline-none"></textarea>
            </div>
            <div className="flex w-8/12 flex-col justify-between text-sm">
              <span className="flex justify-between">
                <span className="font-Inter text-sm">Subtotal</span>
                <span>{subtotal}</span>
              </span>
              <span className="flex justify-between">
                <span className="flex flex-col rounded-lg border border-gray-500 font-Inter text-sm font-bold">
                  <span className="px-2 text-gray-600">Tax %</span>
                  <input
                    type="text"
                    id="tax"
                    name="tax"
                    onChange={handleTaxInputChange}
                    placeholder="0"
                    className="rounded-lg px-2 focus:outline-none"
                  />
                </span>
                <span>{tax ? tax : 0}%</span></span>
              <span className="flex justify-between">
                <span className="font-Inter text-sm font-bold">Total</span>
                <span>{subtotal + (tax / 100) * subtotal}</span>
              </span>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */
        /*                             Preview Pane start                             */
        /* -------------------------------------------------------------------------- */}
        <div className="flex w-4/12 flex-col justify-end">

          {/* ------------------------------ invoice preview start ----------------------------- */}
          <section className="invoicePreview flex flex-1 flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <section ref={componentRef} className="h-full px-6 py-4">
            {/* top section */}
            <section className="flex justify-between">
              <span className="font-bold">Invoice</span>
              <span className="rounded-md bg-gray-200 px-2 py-1 font-semibold">UNPAID</span>
            </section>
            {/* basic details */}
            <section className="mt-10 flex text-xs">
              <div className="flex w-1/2 flex-col justify-between">
                <span className="flex flex-col">
                  <span className="font-semibold">INVOICES#</span>
                  <span>{invoice.id}</span>
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold">ISSUED ON</span>
                  <span>{formatDate(invoice.issuedDate)}</span>
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold">DUE</span>
                  <span>{formatDate(invoice.dueDate)}</span>
                </span>
              </div>
              <div className="flex w-1/2 flex-col gap-2">
                <span className="flex flex-col">
                  <span className="font-semibold">FROM</span>
                  <span>{personalData.userCompany}</span>
                  <span>{personalData.firstName} {personalData.lastName}</span>
                  <span>{personalData.email}</span>
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold">BILL TO</span>
                  <span>{clientsData.clientCompany}</span>
                  <span>{clientsData.firstName} {clientsData.lastName}</span>
                  <span>{clientsData.email}</span>
                </span>
              </div>
            </section>

            {/* table */}
            <table className="rtl:text-rightm mt-10 w-full border-t-2 border-gray-300 text-left text-sm" style={{ paddingTop: '10px' }}>
              <thead className="text-xs uppercase text-black">
                <tr className="">
                  <th scope="col" className="w-6/12 pt-4">
                    Items
                  </th>
                  <th scope="col" className="w-1/12 pt-4 text-right">
                    QTY
                  </th>
                  <th scope="col" className="w-2/12 pt-4 text-right">
                    PRICE
                  </th>
                  <th scope="col" className="w-3/12 pt-4 text-right">
                    TOTAL
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {
                  items.map((data, index) => (
                    <tr className="" key={index}>
                      <td className="">
                        {data.item}
                      </td>
                      <td className="text-right">
                        {data.qty}
                      </td>
                      <td className="text-right">
                        &#8377; {data.price}
                      </td>
                      <td className="text-right">
                        &#8377; {data.total}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>

            {/* total */}
            <section className="mt-10 flex justify-between border-t-2 border-black">
              <span className="flex flex-col text-sm">
                <span>Subtotal</span>
                <span >Tax({tax}%)</span>
                <span className="font-bold">Total(USD)</span>
              </span>
              <span className="flex flex-col text-right text-sm">
                <span>&#8377; {subtotal}</span>
                <span>&#8377; {(tax / 100) * subtotal}</span>
                <span className="font-bold">&#8377; {subtotal + (tax / 100) * subtotal}</span>
              </span>
            </section>

            {/* memo section */}
            <div className="mt-5 flex flex-col">
              <span className="w-1/2 break-words">
                {memo}
              </span>
            </div>
            </section>
          </section>
          {/* ------------------------------- invoice preview end ------------------------------ */}

          {/* button handler */}
          <div className="flex flex-col gap-5 bg-transparent px-2 py-10">
            <button onClick={handlePrint} className="btn-primary w-full">Send invoice for free</button>
            <button onClick={handleSave} className="btn-primary w-full border border-black bg-transparent text-black hover:bg-transparent">Download as PDF</button>
          </div>

          {/* bottom part */}
          <div className="flex flex-col items-center gap-3 rounded-xl px-3 py-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <span className="font-Inter text-base font-semibold">With Crewlance, get paid 100% commission-free</span>
            <span className="flex justify-center gap-3">
              <button className="bank flex w-fit items-center rounded-lg border border-gray-400 px-2 py-1 text-sm">
                <Image width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/bank.png" alt="bank" className="aspect-square w-8" />
                BANK
              </button>
              <button className="bank flex w-fit items-center rounded-lg border border-gray-400 px-2 py-1 text-sm">
                <Image width="60" height="60" src="https://img.icons8.com/external-outline-juicy-fish/60/external-debit-supermarket-outline-outline-juicy-fish.png" alt="external-debit-supermarket-outline-outline-juicy-fish" className="aspect-square w-8" />
                DEBIT
              </button>
              <button className="bank flex w-fit items-center rounded-lg border border-gray-400 px-2 py-1 text-sm">
                <Image width="26" height="26" src="https://img.icons8.com/metro/26/paypal.png" alt="paypal" className="aspect-square w-5" />
                PAYPALL
              </button>
              <button className="bank flex w-fit items-center rounded-lg border border-gray-400 px-2 py-1 text-sm">
                <Image width="64" height="64" src="https://img.icons8.com/external-black-fill-lafs/64/external-USDC-cryptocurrency-black-fill-lafs.png" alt="external-USDC-cryptocurrency-black-fill-lafs" className="aspect-square w-6" />
                USDC
              </button>
            </span></div>

        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
