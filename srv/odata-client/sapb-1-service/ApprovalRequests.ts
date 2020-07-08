/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApprovalRequestsRequestBuilder } from './ApprovalRequestsRequestBuilder';
import { Moment } from 'moment';
import { ApprovalRequestLine, ApprovalRequestLineField } from './ApprovalRequestLine';
import { ApprovalRequestDecision, ApprovalRequestDecisionField } from './ApprovalRequestDecision';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "ApprovalRequests" of service "SAPB1".
 */
export class ApprovalRequests extends Entity implements ApprovalRequestsType {
  /**
   * Technical entity name for ApprovalRequests.
   */
  static _entityName = 'ApprovalRequests';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ApprovalRequests.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Approval Templates Id.
   * @nullable
   */
  approvalTemplatesId?: number;
  /**
   * Object Type.
   * @nullable
   */
  objectType?: string;
  /**
   * Is Draft.
   * @nullable
   */
  isDraft?: string;
  /**
   * Object Entry.
   * @nullable
   */
  objectEntry?: number;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Current Stage.
   * @nullable
   */
  currentStage?: number;
  /**
   * Originator Id.
   * @nullable
   */
  originatorId?: number;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: Moment;
  /**
   * Creation Time.
   * @nullable
   */
  creationTime?: Time;
  /**
   * Draft Entry.
   * @nullable
   */
  draftEntry?: number;
  /**
   * Draft Type.
   * @nullable
   */
  draftType?: string;
  /**
   * Approval Request Lines.
   * @nullable
   */
  approvalRequestLines?: ApprovalRequestLine[];
  /**
   * Approval Request Decisions.
   * @nullable
   */
  approvalRequestDecisions?: ApprovalRequestDecision[];
  /**
   * One-to-one navigation property to the [[ApprovalTemplates]] entity.
   */
  approvalTemplate!: ApprovalTemplates;
  /**
   * One-to-one navigation property to the [[ApprovalStages]] entity.
   */
  approvalStage!: ApprovalStages;
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;

  /**
   * Returns an entity builder to construct instances `ApprovalRequests`.
   * @returns A builder that constructs instances of entity type `ApprovalRequests`.
   */
  static builder(): EntityBuilderType<ApprovalRequests, ApprovalRequestsTypeForceMandatory> {
    return Entity.entityBuilder(ApprovalRequests);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ApprovalRequests` entity type.
   * @returns A `ApprovalRequests` request builder.
   */
  static requestBuilder(): ApprovalRequestsRequestBuilder {
    return new ApprovalRequestsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ApprovalRequests`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ApprovalRequests`.
   */
  static customField(fieldName: string): CustomField<ApprovalRequests> {
    return Entity.customFieldSelector(fieldName, ApprovalRequests);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ApprovalTemplates, ApprovalTemplatesType } from './ApprovalTemplates';
import { ApprovalStages, ApprovalStagesType } from './ApprovalStages';
import { Users, UsersType } from './Users';

export interface ApprovalRequestsType {
  code?: number;
  approvalTemplatesId?: number;
  objectType?: string;
  isDraft?: string;
  objectEntry?: number;
  remarks?: string;
  currentStage?: number;
  originatorId?: number;
  creationDate?: Moment;
  creationTime?: Time;
  draftEntry?: number;
  draftType?: string;
  approvalRequestLines?: ApprovalRequestLine[];
  approvalRequestDecisions?: ApprovalRequestDecision[];
  approvalTemplate: ApprovalTemplatesType;
  approvalStage: ApprovalStagesType;
  user: UsersType;
}

export interface ApprovalRequestsTypeForceMandatory {
  code: number;
  approvalTemplatesId: number;
  objectType: string;
  isDraft: string;
  objectEntry: number;
  remarks: string;
  currentStage: number;
  originatorId: number;
  creationDate: Moment;
  creationTime: Time;
  draftEntry: number;
  draftType: string;
  approvalRequestLines: ApprovalRequestLine[];
  approvalRequestDecisions: ApprovalRequestDecision[];
  approvalTemplate: ApprovalTemplatesType;
  approvalStage: ApprovalStagesType;
  user: UsersType;
}

export namespace ApprovalRequests {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: NumberField<ApprovalRequests> = new NumberField('Code', ApprovalRequests, 'Edm.Int32');
  /**
   * Static representation of the [[approvalTemplatesId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVAL_TEMPLATES_ID: NumberField<ApprovalRequests> = new NumberField('ApprovalTemplatesID', ApprovalRequests, 'Edm.Int32');
  /**
   * Static representation of the [[objectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECT_TYPE: StringField<ApprovalRequests> = new StringField('ObjectType', ApprovalRequests, 'Edm.String');
  /**
   * Static representation of the [[isDraft]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DRAFT: StringField<ApprovalRequests> = new StringField('IsDraft', ApprovalRequests, 'Edm.String');
  /**
   * Static representation of the [[objectEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECT_ENTRY: NumberField<ApprovalRequests> = new NumberField('ObjectEntry', ApprovalRequests, 'Edm.Int32');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<ApprovalRequests> = new StringField('Remarks', ApprovalRequests, 'Edm.String');
  /**
   * Static representation of the [[currentStage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_STAGE: NumberField<ApprovalRequests> = new NumberField('CurrentStage', ApprovalRequests, 'Edm.Int32');
  /**
   * Static representation of the [[originatorId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINATOR_ID: NumberField<ApprovalRequests> = new NumberField('OriginatorID', ApprovalRequests, 'Edm.Int32');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<ApprovalRequests> = new DateField('CreationDate', ApprovalRequests, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[creationTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_TIME: TimeField<ApprovalRequests> = new TimeField('CreationTime', ApprovalRequests, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[draftEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFT_ENTRY: NumberField<ApprovalRequests> = new NumberField('DraftEntry', ApprovalRequests, 'Edm.Int32');
  /**
   * Static representation of the [[draftType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DRAFT_TYPE: StringField<ApprovalRequests> = new StringField('DraftType', ApprovalRequests, 'Edm.String');
  /**
   * Static representation of the [[approvalRequestLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVAL_REQUEST_LINES: CollectionField<ApprovalRequests> = new CollectionField('ApprovalRequestLines', ApprovalRequests, new ApprovalRequestLineField('', ApprovalRequests));
  /**
   * Static representation of the [[approvalRequestDecisions]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVAL_REQUEST_DECISIONS: CollectionField<ApprovalRequests> = new CollectionField('ApprovalRequestDecisions', ApprovalRequests, new ApprovalRequestDecisionField('', ApprovalRequests));
  /**
   * Static representation of the one-to-one navigation property [[approvalTemplate]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVAL_TEMPLATE: OneToOneLink<ApprovalRequests, ApprovalTemplates> = new OneToOneLink('ApprovalTemplate', ApprovalRequests, ApprovalTemplates);
  /**
   * Static representation of the one-to-one navigation property [[approvalStage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVAL_STAGE: OneToOneLink<ApprovalRequests, ApprovalStages> = new OneToOneLink('ApprovalStage', ApprovalRequests, ApprovalStages);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<ApprovalRequests, Users> = new OneToOneLink('User', ApprovalRequests, Users);
  /**
   * All fields of the ApprovalRequests entity.
   */
  export const _allFields: Array<NumberField<ApprovalRequests> | StringField<ApprovalRequests> | DateField<ApprovalRequests> | TimeField<ApprovalRequests> | CollectionField<ApprovalRequests> | OneToOneLink<ApprovalRequests, ApprovalTemplates> | OneToOneLink<ApprovalRequests, ApprovalStages> | OneToOneLink<ApprovalRequests, Users>> = [
    ApprovalRequests.CODE,
    ApprovalRequests.APPROVAL_TEMPLATES_ID,
    ApprovalRequests.OBJECT_TYPE,
    ApprovalRequests.IS_DRAFT,
    ApprovalRequests.OBJECT_ENTRY,
    ApprovalRequests.REMARKS,
    ApprovalRequests.CURRENT_STAGE,
    ApprovalRequests.ORIGINATOR_ID,
    ApprovalRequests.CREATION_DATE,
    ApprovalRequests.CREATION_TIME,
    ApprovalRequests.DRAFT_ENTRY,
    ApprovalRequests.DRAFT_TYPE,
    ApprovalRequests.APPROVAL_REQUEST_LINES,
    ApprovalRequests.APPROVAL_REQUEST_DECISIONS,
    ApprovalRequests.APPROVAL_TEMPLATE,
    ApprovalRequests.APPROVAL_STAGE,
    ApprovalRequests.USER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ApprovalRequests> = new AllFields('*', ApprovalRequests);
  /**
   * All key fields of the ApprovalRequests entity.
   */
  export const _keyFields: Array<Field<ApprovalRequests>> = [ApprovalRequests.CODE];
  /**
   * Mapping of all key field names to the respective static field property ApprovalRequests.
   */
  export const _keys: { [keys: string]: Field<ApprovalRequests> } = ApprovalRequests._keyFields.reduce((acc: { [keys: string]: Field<ApprovalRequests> }, field: Field<ApprovalRequests>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
