/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KnowledgeBaseSolutionsRequestBuilder } from './KnowledgeBaseSolutionsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "KnowledgeBaseSolutions" of service "SAPB1".
 */
export class KnowledgeBaseSolutions extends EntityV4 implements KnowledgeBaseSolutionsType {
  /**
   * Technical entity name for KnowledgeBaseSolutions.
   */
  static _entityName = 'KnowledgeBaseSolutions';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Status.
   * @nullable
   */
  status?: number;
  /**
   * Owner.
   * @nullable
   */
  owner?: number;
  /**
   * Created By.
   * @nullable
   */
  createdBy?: number;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: Moment;
  /**
   * Last Updated By.
   * @nullable
   */
  lastUpdatedBy?: number;
  /**
   * Last Update Date.
   * @nullable
   */
  lastUpdateDate?: Moment;
  /**
   * Solution.
   * @nullable
   */
  solution?: string;
  /**
   * Symptom.
   * @nullable
   */
  symptom?: string;
  /**
   * Cause.
   * @nullable
   */
  cause?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * Solution Code.
   * @nullable
   */
  solutionCode?: number;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: number;
  /**
   * One-to-one navigation property to the [[Items]] entity.
   */
  item!: Items;
  /**
   * One-to-one navigation property to the [[ServiceCallSolutionStatus]] entity.
   */
  serviceCallSolutionStatus!: ServiceCallSolutionStatus;
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;

  /**
   * Returns an entity builder to construct instances of `KnowledgeBaseSolutions`.
   * @returns A builder that constructs instances of entity type `KnowledgeBaseSolutions`.
   */
  static builder(): EntityBuilderType<KnowledgeBaseSolutions, KnowledgeBaseSolutionsType> {
    return EntityV4.entityBuilder(KnowledgeBaseSolutions);
  }

  /**
   * Returns a request builder to construct requests for operations on the `KnowledgeBaseSolutions` entity type.
   * @returns A `KnowledgeBaseSolutions` request builder.
   */
  static requestBuilder(): KnowledgeBaseSolutionsRequestBuilder {
    return new KnowledgeBaseSolutionsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `KnowledgeBaseSolutions`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `KnowledgeBaseSolutions`.
   */
  static customField(fieldName: string): CustomFieldV4<KnowledgeBaseSolutions> {
    return EntityV4.customFieldSelector(fieldName, KnowledgeBaseSolutions);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Items, ItemsType } from './Items';
import { ServiceCallSolutionStatus, ServiceCallSolutionStatusType } from './ServiceCallSolutionStatus';
import { Users, UsersType } from './Users';

export interface KnowledgeBaseSolutionsType {
  itemCode?: string | null;
  status?: number | null;
  owner?: number | null;
  createdBy?: number | null;
  creationDate?: Moment | null;
  lastUpdatedBy?: number | null;
  lastUpdateDate?: Moment | null;
  solution?: string | null;
  symptom?: string | null;
  cause?: string | null;
  description?: string | null;
  solutionCode?: number | null;
  attachmentEntry?: number | null;
  item: ItemsType;
  serviceCallSolutionStatus: ServiceCallSolutionStatusType;
  user: UsersType;
}

export namespace KnowledgeBaseSolutions {
  /**
   * Static representation of the [[itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_CODE: StringField<KnowledgeBaseSolutions> = new StringField('ItemCode', KnowledgeBaseSolutions, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<KnowledgeBaseSolutions> = new NumberField('Status', KnowledgeBaseSolutions, 'Edm.Int32');
  /**
   * Static representation of the [[owner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER: NumberField<KnowledgeBaseSolutions> = new NumberField('Owner', KnowledgeBaseSolutions, 'Edm.Int32');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: NumberField<KnowledgeBaseSolutions> = new NumberField('CreatedBy', KnowledgeBaseSolutions, 'Edm.Int32');
  /**
   * Static representation of the [[creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE: DateField<KnowledgeBaseSolutions> = new DateField('CreationDate', KnowledgeBaseSolutions, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastUpdatedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_UPDATED_BY: NumberField<KnowledgeBaseSolutions> = new NumberField('LastUpdatedBy', KnowledgeBaseSolutions, 'Edm.Int32');
  /**
   * Static representation of the [[lastUpdateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_UPDATE_DATE: DateField<KnowledgeBaseSolutions> = new DateField('LastUpdateDate', KnowledgeBaseSolutions, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[solution]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLUTION: StringField<KnowledgeBaseSolutions> = new StringField('Solution', KnowledgeBaseSolutions, 'Edm.String');
  /**
   * Static representation of the [[symptom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SYMPTOM: StringField<KnowledgeBaseSolutions> = new StringField('Symptom', KnowledgeBaseSolutions, 'Edm.String');
  /**
   * Static representation of the [[cause]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAUSE: StringField<KnowledgeBaseSolutions> = new StringField('Cause', KnowledgeBaseSolutions, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<KnowledgeBaseSolutions> = new StringField('Description', KnowledgeBaseSolutions, 'Edm.String');
  /**
   * Static representation of the [[solutionCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOLUTION_CODE: NumberField<KnowledgeBaseSolutions> = new NumberField('SolutionCode', KnowledgeBaseSolutions, 'Edm.Int32');
  /**
   * Static representation of the [[attachmentEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ENTRY: NumberField<KnowledgeBaseSolutions> = new NumberField('AttachmentEntry', KnowledgeBaseSolutions, 'Edm.Int32');
  /**
   * Static representation of the one-to-one navigation property [[item]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM: OneToOneLink<KnowledgeBaseSolutions, Items> = new OneToOneLink('Item', KnowledgeBaseSolutions, Items);
  /**
   * Static representation of the one-to-one navigation property [[serviceCallSolutionStatus]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CALL_SOLUTION_STATUS: OneToOneLink<KnowledgeBaseSolutions, ServiceCallSolutionStatus> = new OneToOneLink('ServiceCallSolutionStatus', KnowledgeBaseSolutions, ServiceCallSolutionStatus);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<KnowledgeBaseSolutions, Users> = new OneToOneLink('User', KnowledgeBaseSolutions, Users);
  /**
   * All fields of the KnowledgeBaseSolutions entity.
   */
  export const _allFields: Array<StringField<KnowledgeBaseSolutions> | NumberField<KnowledgeBaseSolutions> | DateField<KnowledgeBaseSolutions> | OneToOneLink<KnowledgeBaseSolutions, Items> | OneToOneLink<KnowledgeBaseSolutions, ServiceCallSolutionStatus> | OneToOneLink<KnowledgeBaseSolutions, Users>> = [
    KnowledgeBaseSolutions.ITEM_CODE,
    KnowledgeBaseSolutions.STATUS,
    KnowledgeBaseSolutions.OWNER,
    KnowledgeBaseSolutions.CREATED_BY,
    KnowledgeBaseSolutions.CREATION_DATE,
    KnowledgeBaseSolutions.LAST_UPDATED_BY,
    KnowledgeBaseSolutions.LAST_UPDATE_DATE,
    KnowledgeBaseSolutions.SOLUTION,
    KnowledgeBaseSolutions.SYMPTOM,
    KnowledgeBaseSolutions.CAUSE,
    KnowledgeBaseSolutions.DESCRIPTION,
    KnowledgeBaseSolutions.SOLUTION_CODE,
    KnowledgeBaseSolutions.ATTACHMENT_ENTRY,
    KnowledgeBaseSolutions.ITEM,
    KnowledgeBaseSolutions.SERVICE_CALL_SOLUTION_STATUS,
    KnowledgeBaseSolutions.USER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<KnowledgeBaseSolutions> = new AllFields('*', KnowledgeBaseSolutions);
  /**
   * All key fields of the KnowledgeBaseSolutions entity.
   */
  export const _keyFields: Array<Field<KnowledgeBaseSolutions>> = [KnowledgeBaseSolutions.SOLUTION_CODE];
  /**
   * Mapping of all key field names to the respective static field property KnowledgeBaseSolutions.
   */
  export const _keys: { [keys: string]: Field<KnowledgeBaseSolutions> } = KnowledgeBaseSolutions._keyFields.reduce((acc: { [keys: string]: Field<KnowledgeBaseSolutions> }, field: Field<KnowledgeBaseSolutions>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
