/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { ApprovalRequestLine } from './ApprovalRequestLine';
import { ApprovalRequestDecision } from './ApprovalRequestDecision';
import type { ApprovalRequestsApi } from './ApprovalRequestsApi';
import { BoApprovalRequestStatusEnum } from './BoApprovalRequestStatusEnum';
import { ApprovalTemplates, ApprovalTemplatesType } from './ApprovalTemplates';
import { ApprovalStages, ApprovalStagesType } from './ApprovalStages';
import { Users, UsersType } from './Users';

/**
 * This class represents the entity "ApprovalRequests" of service "SAPB1".
 */
export class ApprovalRequests<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApprovalRequestsType<T>
{
  /**
   * Technical entity name for ApprovalRequests.
   */
  static _entityName = 'ApprovalRequests';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ApprovalRequests entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Approval Templates Id.
   * @nullable
   */
  approvalTemplatesId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Object Type.
   * @nullable
   */
  objectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Draft.
   * @nullable
   */
  isDraft?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object Entry.
   * @nullable
   */
  objectEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Status.
   * @nullable
   */
  status?: BoApprovalRequestStatusEnum | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Current Stage.
   * @nullable
   */
  currentStage?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Originator Id.
   * @nullable
   */
  originatorId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Creation Time.
   * @nullable
   */
  creationTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Draft Entry.
   * @nullable
   */
  draftEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Draft Type.
   * @nullable
   */
  draftType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approval Request Lines.
   * @nullable
   */
  approvalRequestLines?: ApprovalRequestLine<T>[] | null;
  /**
   * Approval Request Decisions.
   * @nullable
   */
  approvalRequestDecisions?: ApprovalRequestDecision<T>[] | null;
  /**
   * One-to-one navigation property to the {@link ApprovalTemplates} entity.
   */
  approvalTemplate?: ApprovalTemplates<T> | null;
  /**
   * One-to-one navigation property to the {@link ApprovalStages} entity.
   */
  approvalStage?: ApprovalStages<T> | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;

  constructor(readonly _entityApi: ApprovalRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface ApprovalRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  approvalTemplatesId?: DeserializedType<T, 'Edm.Int32'> | null;
  objectType?: DeserializedType<T, 'Edm.String'> | null;
  isDraft?: DeserializedType<T, 'Edm.String'> | null;
  objectEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  status?: BoApprovalRequestStatusEnum | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  currentStage?: DeserializedType<T, 'Edm.Int32'> | null;
  originatorId?: DeserializedType<T, 'Edm.Int32'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  creationTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  draftEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  draftType?: DeserializedType<T, 'Edm.String'> | null;
  approvalRequestLines?: ApprovalRequestLine<T>[] | null;
  approvalRequestDecisions?: ApprovalRequestDecision<T>[] | null;
  approvalTemplate?: ApprovalTemplatesType<T> | null;
  approvalStage?: ApprovalStagesType<T> | null;
  user?: UsersType<T> | null;
}
