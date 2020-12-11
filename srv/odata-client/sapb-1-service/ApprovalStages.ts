/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApprovalStagesRequestBuilder } from './ApprovalStagesRequestBuilder';
import { ApprovalStageApprover } from './ApprovalStageApprover';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ApprovalStages" of service "SAPB1".
 */
export class ApprovalStages extends EntityV4 implements ApprovalStagesType {
  /**
   * Technical entity name for ApprovalStages.
   */
  static _entityName = 'ApprovalStages';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * No Of Approvers Required.
   * @nullable
   */
  noOfApproversRequired?: number;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Approval Stage Approvers.
   * @nullable
   */
  approvalStageApprovers?: ApprovalStageApprover[];
  /**
   * One-to-many navigation property to the [[ApprovalRequests]] entity.
   */
  approvalRequests!: ApprovalRequests[];

  /**
   * Returns an entity builder to construct instances of `ApprovalStages`.
   * @returns A builder that constructs instances of entity type `ApprovalStages`.
   */
  static builder(): EntityBuilderType<ApprovalStages, ApprovalStagesType> {
    return EntityV4.entityBuilder(ApprovalStages);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ApprovalStages` entity type.
   * @returns A `ApprovalStages` request builder.
   */
  static requestBuilder(): ApprovalStagesRequestBuilder {
    return new ApprovalStagesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ApprovalStages`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ApprovalStages`.
   */
  static customField(fieldName: string): CustomFieldV4<ApprovalStages> {
    return EntityV4.customFieldSelector(fieldName, ApprovalStages);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ApprovalRequests, ApprovalRequestsType } from './ApprovalRequests';

export interface ApprovalStagesType {
  code?: number | null;
  name?: string | null;
  noOfApproversRequired?: number | null;
  remarks?: string | null;
  approvalStageApprovers?: ApprovalStageApprover[] | null;
  approvalRequests: ApprovalRequestsType[];
}

export namespace ApprovalStages {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<ApprovalStages> = new NumberField('Code', ApprovalStages, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<ApprovalStages> = new StringField('Name', ApprovalStages, 'Edm.String');
  /**
   * Static representation of the [[noOfApproversRequired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NO_OF_APPROVERS_REQUIRED: NumberField<ApprovalStages> = new NumberField('NoOfApproversRequired', ApprovalStages, 'Edm.Int32');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<ApprovalStages> = new StringField('Remarks', ApprovalStages, 'Edm.String');
  /**
   * Static representation of the [[approvalStageApprovers]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVAL_STAGE_APPROVERS: CollectionField<ApprovalStages, ApprovalStageApprover> = new CollectionField('ApprovalStageApprovers', ApprovalStages, ApprovalStageApprover);
  /**
   * Static representation of the one-to-many navigation property [[approvalRequests]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVAL_REQUESTS: OneToManyLink<ApprovalStages, ApprovalRequests> = new OneToManyLink('ApprovalRequests', ApprovalStages, ApprovalRequests);
  /**
   * All fields of the ApprovalStages entity.
   */
  export const _allFields: Array<NumberField<ApprovalStages> | StringField<ApprovalStages> | CollectionField<ApprovalStages, ApprovalStageApprover> | OneToManyLink<ApprovalStages, ApprovalRequests>> = [
    ApprovalStages.CODE,
    ApprovalStages.NAME,
    ApprovalStages.NO_OF_APPROVERS_REQUIRED,
    ApprovalStages.REMARKS,
    ApprovalStages.APPROVAL_STAGE_APPROVERS,
    ApprovalStages.APPROVAL_REQUESTS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ApprovalStages> = new AllFields('*', ApprovalStages);
  /**
   * All key fields of the ApprovalStages entity.
   */
  export const _keyFields: Array<Field<ApprovalStages>> = [ApprovalStages.CODE];
  /**
   * Mapping of all key field names to the respective static field property ApprovalStages.
   */
  export const _keys: { [keys: string]: Field<ApprovalStages> } = ApprovalStages._keyFields.reduce((acc: { [keys: string]: Field<ApprovalStages> }, field: Field<ApprovalStages>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
