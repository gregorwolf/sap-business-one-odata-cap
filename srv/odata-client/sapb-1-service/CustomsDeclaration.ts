/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomsDeclarationRequestBuilder } from './CustomsDeclarationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CustomsDeclaration" of service "SAPB1".
 */
export class CustomsDeclaration extends EntityV4 implements CustomsDeclarationType {
  /**
   * Technical entity name for CustomsDeclaration.
   */
  static _entityName = 'CustomsDeclaration';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Ccd Num.
   * @nullable
   */
  ccdNum?: string;
  /**
   * Date.
   * @nullable
   */
  date?: Moment;
  /**
   * Customs Broker.
   * @nullable
   */
  customsBroker?: string;
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: string;
  /**
   * Doc Date.
   * @nullable
   */
  docDate?: Moment;
  /**
   * Supply Num.
   * @nullable
   */
  supplyNum?: string;
  /**
   * Supply Date.
   * @nullable
   */
  supplyDate?: Moment;
  /**
   * Customs Terminal.
   * @nullable
   */
  customsTerminal?: string;
  /**
   * Payment Key.
   * @nullable
   */
  paymentKey?: string;

  /**
   * Returns an entity builder to construct instances of `CustomsDeclaration`.
   * @returns A builder that constructs instances of entity type `CustomsDeclaration`.
   */
  static builder(): EntityBuilderType<CustomsDeclaration, CustomsDeclarationType> {
    return EntityV4.entityBuilder(CustomsDeclaration);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustomsDeclaration` entity type.
   * @returns A `CustomsDeclaration` request builder.
   */
  static requestBuilder(): CustomsDeclarationRequestBuilder {
    return new CustomsDeclarationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomsDeclaration`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustomsDeclaration`.
   */
  static customField(fieldName: string): CustomFieldV4<CustomsDeclaration> {
    return EntityV4.customFieldSelector(fieldName, CustomsDeclaration);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface CustomsDeclarationType {
  ccdNum?: string | null;
  date?: Moment | null;
  customsBroker?: string | null;
  docNum?: string | null;
  docDate?: Moment | null;
  supplyNum?: string | null;
  supplyDate?: Moment | null;
  customsTerminal?: string | null;
  paymentKey?: string | null;
}

export namespace CustomsDeclaration {
  /**
   * Static representation of the [[ccdNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CCD_NUM: StringField<CustomsDeclaration> = new StringField('CCDNum', CustomsDeclaration, 'Edm.String');
  /**
   * Static representation of the [[date]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE: DateField<CustomsDeclaration> = new DateField('Date', CustomsDeclaration, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[customsBroker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMS_BROKER: StringField<CustomsDeclaration> = new StringField('CustomsBroker', CustomsDeclaration, 'Edm.String');
  /**
   * Static representation of the [[docNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_NUM: StringField<CustomsDeclaration> = new StringField('DocNum', CustomsDeclaration, 'Edm.String');
  /**
   * Static representation of the [[docDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOC_DATE: DateField<CustomsDeclaration> = new DateField('DocDate', CustomsDeclaration, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[supplyNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLY_NUM: StringField<CustomsDeclaration> = new StringField('SupplyNum', CustomsDeclaration, 'Edm.String');
  /**
   * Static representation of the [[supplyDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLY_DATE: DateField<CustomsDeclaration> = new DateField('SupplyDate', CustomsDeclaration, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[customsTerminal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMS_TERMINAL: StringField<CustomsDeclaration> = new StringField('CustomsTerminal', CustomsDeclaration, 'Edm.String');
  /**
   * Static representation of the [[paymentKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_KEY: StringField<CustomsDeclaration> = new StringField('PaymentKey', CustomsDeclaration, 'Edm.String');
  /**
   * All fields of the CustomsDeclaration entity.
   */
  export const _allFields: Array<StringField<CustomsDeclaration> | DateField<CustomsDeclaration>> = [
    CustomsDeclaration.CCD_NUM,
    CustomsDeclaration.DATE,
    CustomsDeclaration.CUSTOMS_BROKER,
    CustomsDeclaration.DOC_NUM,
    CustomsDeclaration.DOC_DATE,
    CustomsDeclaration.SUPPLY_NUM,
    CustomsDeclaration.SUPPLY_DATE,
    CustomsDeclaration.CUSTOMS_TERMINAL,
    CustomsDeclaration.PAYMENT_KEY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustomsDeclaration> = new AllFields('*', CustomsDeclaration);
  /**
   * All key fields of the CustomsDeclaration entity.
   */
  export const _keyFields: Array<Field<CustomsDeclaration>> = [CustomsDeclaration.CCD_NUM];
  /**
   * Mapping of all key field names to the respective static field property CustomsDeclaration.
   */
  export const _keys: { [keys: string]: Field<CustomsDeclaration> } = CustomsDeclaration._keyFields.reduce((acc: { [keys: string]: Field<CustomsDeclaration> }, field: Field<CustomsDeclaration>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
