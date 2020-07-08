/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IndiaSacCodeRequestBuilder } from './IndiaSacCodeRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "IndiaSacCode" of service "SAPB1".
 */
export class IndiaSacCode extends Entity implements IndiaSacCodeType {
  /**
   * Technical entity name for IndiaSacCode.
   */
  static _entityName = 'IndiaSacCode';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for IndiaSacCode.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Service Code.
   * @nullable
   */
  serviceCode?: string;
  /**
   * Service Name.
   * @nullable
   */
  serviceName?: string;
  /**
   * One-to-many navigation property to the [[Items]] entity.
   */
  items!: Items[];

  /**
   * Returns an entity builder to construct instances `IndiaSacCode`.
   * @returns A builder that constructs instances of entity type `IndiaSacCode`.
   */
  static builder(): EntityBuilderType<IndiaSacCode, IndiaSacCodeTypeForceMandatory> {
    return Entity.entityBuilder(IndiaSacCode);
  }

  /**
   * Returns a request builder to construct requests for operations on the `IndiaSacCode` entity type.
   * @returns A `IndiaSacCode` request builder.
   */
  static requestBuilder(): IndiaSacCodeRequestBuilder {
    return new IndiaSacCodeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `IndiaSacCode`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `IndiaSacCode`.
   */
  static customField(fieldName: string): CustomField<IndiaSacCode> {
    return Entity.customFieldSelector(fieldName, IndiaSacCode);
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

export interface IndiaSacCodeType {
  absEntry?: number;
  serviceCode?: string;
  serviceName?: string;
  items: ItemsType[];
}

export interface IndiaSacCodeTypeForceMandatory {
  absEntry: number;
  serviceCode: string;
  serviceName: string;
  items: ItemsType[];
}

export namespace IndiaSacCode {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<IndiaSacCode> = new NumberField('AbsEntry', IndiaSacCode, 'Edm.Int32');
  /**
   * Static representation of the [[serviceCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_CODE: StringField<IndiaSacCode> = new StringField('ServiceCode', IndiaSacCode, 'Edm.String');
  /**
   * Static representation of the [[serviceName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_NAME: StringField<IndiaSacCode> = new StringField('ServiceName', IndiaSacCode, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: OneToManyLink<IndiaSacCode, Items> = new OneToManyLink('Items', IndiaSacCode, Items);
  /**
   * All fields of the IndiaSacCode entity.
   */
  export const _allFields: Array<NumberField<IndiaSacCode> | StringField<IndiaSacCode> | OneToManyLink<IndiaSacCode, Items>> = [
    IndiaSacCode.ABS_ENTRY,
    IndiaSacCode.SERVICE_CODE,
    IndiaSacCode.SERVICE_NAME,
    IndiaSacCode.ITEMS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<IndiaSacCode> = new AllFields('*', IndiaSacCode);
  /**
   * All key fields of the IndiaSacCode entity.
   */
  export const _keyFields: Array<Field<IndiaSacCode>> = [IndiaSacCode.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property IndiaSacCode.
   */
  export const _keys: { [keys: string]: Field<IndiaSacCode> } = IndiaSacCode._keyFields.reduce((acc: { [keys: string]: Field<IndiaSacCode> }, field: Field<IndiaSacCode>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
