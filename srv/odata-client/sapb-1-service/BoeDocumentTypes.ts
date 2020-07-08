/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoeDocumentTypesRequestBuilder } from './BoeDocumentTypesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "BOEDocumentTypes" of service "SAPB1".
 */
export class BoeDocumentTypes extends Entity implements BoeDocumentTypesType {
  /**
   * Technical entity name for BoeDocumentTypes.
   */
  static _entityName = 'BOEDocumentTypes';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BoeDocumentTypes.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: string;
  /**
   * Doc Description.
   * @nullable
   */
  docDescription?: string;

  /**
   * Returns an entity builder to construct instances `BoeDocumentTypes`.
   * @returns A builder that constructs instances of entity type `BoeDocumentTypes`.
   */
  static builder(): EntityBuilderType<BoeDocumentTypes, BoeDocumentTypesTypeForceMandatory> {
    return Entity.entityBuilder(BoeDocumentTypes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BoeDocumentTypes` entity type.
   * @returns A `BoeDocumentTypes` request builder.
   */
  static requestBuilder(): BoeDocumentTypesRequestBuilder {
    return new BoeDocumentTypesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BoeDocumentTypes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BoeDocumentTypes`.
   */
  static customField(fieldName: string): CustomField<BoeDocumentTypes> {
    return Entity.customFieldSelector(fieldName, BoeDocumentTypes);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BoeDocumentTypesType {
  docEntry?: number;
  docType?: string;
  docDescription?: string;
}

export interface BoeDocumentTypesTypeForceMandatory {
  docEntry: number;
  docType: string;
  docDescription: string;
}

export namespace BoeDocumentTypes {
  /**
   * Static representation of the [[docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_ENTRY: NumberField<BoeDocumentTypes> = new NumberField('DocEntry', BoeDocumentTypes, 'Edm.Int32');
  /**
   * Static representation of the [[docType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_TYPE: StringField<BoeDocumentTypes> = new StringField('DocType', BoeDocumentTypes, 'Edm.String');
  /**
   * Static representation of the [[docDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DESCRIPTION: StringField<BoeDocumentTypes> = new StringField('DocDescription', BoeDocumentTypes, 'Edm.String');
  /**
   * All fields of the BoeDocumentTypes entity.
   */
  export const _allFields: Array<NumberField<BoeDocumentTypes> | StringField<BoeDocumentTypes>> = [
    BoeDocumentTypes.DOC_ENTRY,
    BoeDocumentTypes.DOC_TYPE,
    BoeDocumentTypes.DOC_DESCRIPTION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BoeDocumentTypes> = new AllFields('*', BoeDocumentTypes);
  /**
   * All key fields of the BoeDocumentTypes entity.
   */
  export const _keyFields: Array<Field<BoeDocumentTypes>> = [BoeDocumentTypes.DOC_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property BoeDocumentTypes.
   */
  export const _keys: { [keys: string]: Field<BoeDocumentTypes> } = BoeDocumentTypes._keyFields.reduce((acc: { [keys: string]: Field<BoeDocumentTypes> }, field: Field<BoeDocumentTypes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
