import { Link } from "react-router-dom";

const MemberRow = ({ member, i }) => {
  const { name, email, userId } = member;

  return (
    <tr>
      <td>{i + 1}</td>
      <td>{name}</td>
      <td>{email}</td>

      <td>
        <Link to={`/user-details/${userId}`}>
          <button className="btn bg-[#2B3440] text-white hover:bg-[#0218179c] normal-case btn-sm">
            View Profile
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default MemberRow;
