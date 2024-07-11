import React, { useState } from 'react';

const RegisterForm = () => {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [referral, setReferral] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://your-render-url/api/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, username, email, phone, password, referral, reason })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>إنشاء حساب</h2>
            <input
                type="text"
                placeholder="الاسم الكامل"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />
            <input
                type="text"
                placeholder="اسم المستخدم"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="البريد الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="رقم الهاتف"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                type="password"
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="text"
                placeholder="من أين تعرفت علينا؟"
                value={referral}
                onChange={(e) => setReferral(e.target.value)}
            />
            <textarea
                placeholder="لماذا تريد استخدام موقعنا؟"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
            />
            <button type="submit">إنشاء حساب</button>
        </form>
    );
};

export default RegisterForm;
