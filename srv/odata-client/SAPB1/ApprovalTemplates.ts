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
import { ApprovalTemplateUser } from './ApprovalTemplateUser';
import { ApprovalTemplateStage } from './ApprovalTemplateStage';
import { ApprovalTemplateDocument } from './ApprovalTemplateDocument';
import { ApprovalTemplateTerm } from './ApprovalTemplateTerm';
import { ApprovalTemplateQuery } from './ApprovalTemplateQuery';
import type { ApprovalTemplatesApi } from './ApprovalTemplatesApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ApprovalRequests, ApprovalRequestsType } from './ApprovalRequests';

/**
 * This class represents the entity "ApprovalTemplates" of service "SAPB1".
 */
export class ApprovalTemplates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApprovalTemplatesType<T>
{
  /**
   * Technical entity name for ApprovalTemplates.
   */
  static _entityName = 'ApprovalTemplates';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ApprovalTemplates entity
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
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Terms.
   * @nullable
   */
  useTerms?: BoYesNoEnum | null;
  /**
   * Is Active.
   * @nullable
   */
  isActive?: BoYesNoEnum | null;
  /**
   * Is Active When Updating Documents.
   * @nullable
   */
  isActiveWhenUpdatingDocuments?: BoYesNoEnum | null;
  /**
   * Approval Template Users.
   * @nullable
   */
  approvalTemplateUsers?: ApprovalTemplateUser<T>[] | null;
  /**
   * Approval Template Stages.
   * @nullable
   */
  approvalTemplateStages?: ApprovalTemplateStage<T>[] | null;
  /**
   * Approval Template Documents.
   * @nullable
   */
  approvalTemplateDocuments?: ApprovalTemplateDocument<T>[] | null;
  /**
   * Approval Template Terms.
   * @nullable
   */
  approvalTemplateTerms?: ApprovalTemplateTerm<T>[] | null;
  /**
   * Approval Template Queries.
   * @nullable
   */
  approvalTemplateQueries?: ApprovalTemplateQuery<T>[] | null;
  /**
   * One-to-many navigation property to the {@link ApprovalRequests} entity.
   */
  approvalRequests!: ApprovalRequests<T>[];

  constructor(readonly _entityApi: ApprovalTemplatesApi<T>) {
    super(_entityApi);
  }
}

export interface ApprovalTemplatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  remarks?: DeserializedType<T, 'Edm.String'> | null;
  useTerms?: BoYesNoEnum | null;
  isActive?: BoYesNoEnum | null;
  isActiveWhenUpdatingDocuments?: BoYesNoEnum | null;
  approvalTemplateUsers?: ApprovalTemplateUser<T>[] | null;
  approvalTemplateStages?: ApprovalTemplateStage<T>[] | null;
  approvalTemplateDocuments?: ApprovalTemplateDocument<T>[] | null;
  approvalTemplateTerms?: ApprovalTemplateTerm<T>[] | null;
  approvalTemplateQueries?: ApprovalTemplateQuery<T>[] | null;
  approvalRequests: ApprovalRequestsType<T>[];
}
