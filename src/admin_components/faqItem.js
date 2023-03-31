import Link from 'next/link';
import React from 'react'
import { useState } from 'react'
import { AiOutlineDown, AiOutlineUp, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import Modal from './modal';
import apiUrl from '../../config';

const FaqItem = ({ items, removeFaq }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false);
  const [faqId, setFaqId] = useState()

  function handleOpenModal(id) {
    setFaqId(id)
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index)
  }

  async function onDelete() {
    setIsOpen(false);
    let headersList = {
      "Accept": "*/*"
    }

    let response = await fetch(`${apiUrl}/faqs?id=${faqId}`, {
      method: "DELETE",
      headers: headersList
    });

    removeFaq(faqId);

  }

  return (
    <div className="accordion w-full flex flex-col justify-center items-center">
      <Modal onClick={onDelete} isOpen={isOpen} onClose={handleCloseModal} title="Delete link">
        <p>
          Are you sure you want to delete this FAQ?
        </p>
      </Modal>
      {items.map((item, index) => (
        <div className={`accordion-item ${index === activeIndex ? 'active' : ''} w-full bg-surface`} key={index}>
          <div className="accordion-item-title" onClick={() => handleClick(index)}>
            <div className='font-semibold'>{item.question}</div>
            <div className='flex flex-row'>
              <div className='flex flex-row mr-4'>
                <Link href={`/admin/faq/${item.id}/edit`}><AiOutlineEdit className='w-[25px] h-[25px] mr-2 cursor-pointer' /></Link>
                <AiOutlineDelete onClick={() => handleOpenModal(item.id)} className='w-[25px] h-[25px] fill-dangerColor cursor-pointer' />
              </div>
              <div>{index === activeIndex ? <AiOutlineUp className='w-[25px] h-[25px] text-accentColor' /> : <AiOutlineDown className='w-[25px] h-[25px] text-accentColor' />}</div>
            </div>
          </div>
          <div className="accordion-item-content">{item.answer}</div>
        </div>
      ))}
    </div>
  )
}

export default FaqItem