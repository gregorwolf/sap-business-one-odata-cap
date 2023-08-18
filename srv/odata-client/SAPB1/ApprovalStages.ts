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
import { ApprovalStageApprover } from './ApprovalStageApprover';
import type { ApprovalStagesApi } from './ApprovalStagesApi';
import { ApprovalRequests, ApprovalRequestsType } from './ApprovalRequests';

/**
 * This class represents the entity "ApprovalStages" of service "SAPB1".
 */
export class ApprovalStages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApprovalStagesType<T>
{
  /**
   * Technical entity name for ApprovalStages.
   */
  static _entityName = 'ApprovalStages';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ApprovalStages entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * No Of Approvers Required.
   * @nullable
   */
  noOfApproversRequired?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approval Stage Approvers.
   * @nullable
   */
  approvalStageApprovers?: ApprovalStageApprover<T>[] | null;
  /**
   * One-to-many navigation property to the {@link ApprovalRequests} entity.
   */
  approvalRequests!: ApprovalRequests<T>[];

  constructor(readonly _entityApi: ApprovalStagesApi<T>) {
    super(_entityApi);
  }
}

export interface ApprovalStagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  noOfApproversRequired?: DeserializedType<T, 'Edm.Int32'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  approvalStageApprovers?: ApprovalStageApprover<T>[] | null;
  approvalRequests: ApprovalRequestsType<T>[];
}
