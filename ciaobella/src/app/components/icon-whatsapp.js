import { FaWhatsapp, FaInstagram  } from 'react-icons/fa';

const WhatsAppButton = () => {
    const phoneNumber = '541123924974';

    return (
        <div style={{
            display: 'flex', justifyContent: 'center',
            gap: '10px',
        }}>

            <a
                href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer"
                style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    backgroundColor: 'white',
                    padding: '8px 10px',
                    borderRadius: '22px',
                    boxShadow: '0 4px 8px color: white',
                    cursor: 'pointer'
                }}
            >
                <FaWhatsapp size={22} style={{ color: 'black' }} />
            </a>


            <a
                href="https://www.instagram.com/ciaobellaba?igsh=OGw5d29kYnRwMmN6"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    padding: '8px 10px',
                    borderRadius: '50px',
                    boxShadow: '0 4px 8px color: white',
                    cursor: 'pointer',
                }}
            >
                <FaInstagram size={22} style={{ color: ' black' }} />
                
            </a>

        </div>
    );
};

export default WhatsAppButton;