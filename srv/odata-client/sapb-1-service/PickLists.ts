/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PickListsRequestBuilder } from './PickListsRequestBuilder';
import { Moment } from 'moment';
import { PickListsLine, PickListsLineField } from './PickListsLine';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "PickLists" of service "SAPB1".
 */
export class PickLists extends Entity implements PickListsType {
  /**
   * Technical entity name for PickLists.
   */
  static _entityName = 'PickLists';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PickLists.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Absoluteentry.
   * @nullable
   */
  absoluteentry?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Owner Code.
   * @nullable
   */
  ownerCode?: number;
  /**
   * Owner Name.
   * @nullable
   */
  ownerName?: string;
  /**
   * Pick Date.
   * @nullable
   */
  pickDate?: Moment;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Object Type.
   * @nullable
   */
  objectType?: string;
  /**
   * Pick Lists Lines.
   * @nullable
   */
  pickListsLines?: PickListsLine[];
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;

  /**
   * Returns an entity builder to construct instances `PickLists`.
   * @returns A builder that constructs instances of entity type `PickLists`.
   */
  static builder(): EntityBuilderType<PickLists, PickListsTypeForceMandatory> {
    return Entity.entityBuilder(PickLists);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PickLists` entity type.
   * @returns A `PickLists` request builder.
   */
  static requestBuilder(): PickListsRequestBuilder {
    return new PickListsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PickLists`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PickLists`.
   */
  static customField(fieldName: string): CustomField<PickLists> {
    return Entity.customFieldSelector(fieldName, PickLists);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Users, UsersType } from './Users';

export interface PickListsType {
  absoluteentry?: number;
  name?: string;
  ownerCode?: number;
  ownerName?: string;
  pickDate?: Moment;
  remarks?: string;
  objectType?: string;
  pickListsLines?: PickListsLine[];
  user: UsersType;
}

export interface PickListsTypeForceMandatory {
  absoluteentry: number;
  name: string;
  ownerCode: number;
  ownerName: string;
  pickDate: Moment;
  remarks: string;
  objectType: string;
  pickListsLines: PickListsLine[];
  user: UsersType;
}

export namespace PickLists {
  /**
   * Static representation of the [[absoluteentry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABSOLUTEENTRY: NumberField<PickLists> = new NumberField('Absoluteentry', PickLists, 'Edm.Int32');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<PickLists> = new StringField('Name', PickLists, 'Edm.String');
  /**
   * Static representation of the [[ownerCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER_CODE: NumberField<PickLists> = new NumberField('OwnerCode', PickLists, 'Edm.Int32');
  /**
   * Static representation of the [[ownerName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER_NAME: StringField<PickLists> = new StringField('OwnerName', PickLists, 'Edm.String');
  /**
   * Static representation of the [[pickDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_DATE: DateField<PickLists> = new DateField('PickDate', PickLists, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[remarks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMARKS: StringField<PickLists> = new StringField('Remarks', PickLists, 'Edm.String');
  /**
   * Static representation of the [[objectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECT_TYPE: StringField<PickLists> = new StringField('ObjectType', PickLists, 'Edm.String');
  /**
   * Static representation of the [[pickListsLines]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICK_LISTS_LINES: CollectionField<PickLists> = new CollectionField('PickListsLines', PickLists, new PickListsLineField('', PickLists));
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<PickLists, Users> = new OneToOneLink('User', PickLists, Users);
  /**
   * All fields of the PickLists entity.
   */
  export const _allFields: Array<NumberField<PickLists> | StringField<PickLists> | DateField<PickLists> | CollectionField<PickLists> | OneToOneLink<PickLists, Users>> = [
    PickLists.ABSOLUTEENTRY,
    PickLists.NAME,
    PickLists.OWNER_CODE,
    PickLists.OWNER_NAME,
    PickLists.PICK_DATE,
    PickLists.REMARKS,
    PickLists.OBJECT_TYPE,
    PickLists.PICK_LISTS_LINES,
    PickLists.USER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PickLists> = new AllFields('*', PickLists);
  /**
   * All key fields of the PickLists entity.
   */
  export const _keyFields: Array<Field<PickLists>> = [PickLists.ABSOLUTEENTRY];
  /**
   * Mapping of all key field names to the respective static field property PickLists.
   */
  export const _keys: { [keys: string]: Field<PickLists> } = PickLists._keyFields.reduce((acc: { [keys: string]: Field<PickLists> }, field: Field<PickLists>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
