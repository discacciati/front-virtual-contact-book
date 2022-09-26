import { Container, Content } from "./styles.js";
import Button from "../Button/index.jsx";
import { formatDate, typeTranslate } from "../../utils/index.jsx";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext, useEffect, useState } from "react";
import { userInfoContext } from "../../providers/userInfo/index.jsx";
import { useContactList } from "../../providers/ContactList";
import {
  HiExclamationCircle,
  HiOutlineEye,
  HiOutlineEyeOff,
} from "react-icons/hi";

const ClientCard = ({ event }) => {
  const history = useHistory();
  const { userInfo } = useContext(userInfoContext);
  const { deleteEvent, refuseEvent } = useContactList();
  const [isSolicited, setIsSolicited] = useState(false);

  return (
    <Container>
      <Content>
        {userInfo.type === "cliente" ? (
          <>
            <h2>{event.title}</h2>
            <div className="divider1"></div>
            <h4>Tipo: {typeTranslate(event.type)}</h4>
            <h4>Data: {formatDate(event.date)}</h4>
            <h4>Local: {event.states}</h4>

            <div className="local-date">
              {event.public ? (
                <>
                  <HiOutlineEye className="icon" />
                  <h5>Visível para todos</h5>
                </>
              ) : (
                <>
                  <HiOutlineEyeOff className="icon" />
                  <h5>Apenas convidados</h5>
                </>
              )}
            </div>
            <div className="buttons">
              <Button
                beigeSchema
                onClick={() => history.push(`/events/${event.id}`)}
              >
                Ver Evento
              </Button>
              <Button greySchema onClick={() => deleteEvent(event.id)}>
                Excluir
              </Button>
            </div>
          </>
        ) : (
          <>
            <h2>{event.title}</h2>

            <div className="divider1"></div>

            <h4>Data: {formatDate(event.date)}</h4>

            <div className="divider1"></div>
            <h4>Dados do Cliente: </h4>
            <h4>Nome: {event.userInfos.name}</h4>
            <h4>Contato: {event.userInfos.number}</h4>
            <h4>E-mail: {event.userInfos.email}</h4>

            {event.public ? (
              <>
                <div className="local-date">
                  <HiOutlineEye className="icon" />
                  <h5>Visível para todos</h5>
                </div>
                {isSolicited ? (
                  <div className="solicitation">
                    <h4>Você foi solicitado</h4>
                    <HiExclamationCircle />
                  </div>
                ) : null}
              </>
            ) : (
              <div className="div-end">
                <div className="local-date">
                  <HiOutlineEyeOff className="icon" />
                  <h5>Apenas convidados</h5>
                </div>
                {isSolicited ? (
                  <div className="solicitation">
                    <h4>Você foi solicitado</h4>
                    <HiExclamationCircle />
                  </div>
                ) : null}
              </div>
            )}
            <Button
              beigeSchema
              onClick={() => refuseEvent(event.hash, event.id)}
            >
              Recusar evento
            </Button>
          </>
        )}
      </Content>
    </Container>
  );
};

export default ClientCard;
