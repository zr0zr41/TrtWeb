import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://your-render-url/api/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>قائمة المستخدمين</h2>
            <table>
                <thead>
                    <tr>
                        <th>الاسم الكامل</th>
                        <th>اسم المستخدم</th>
                        <th>البريد الإلكتروني</th>
                        <th>رقم الهاتف</th>
                        <th>من أين تعرف علينا</th>
                        <th>سبب الاستخدام</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.full_name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.referral}</td>
                            <td>{user.reason}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
