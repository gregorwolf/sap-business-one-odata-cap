/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankChargesAllocationCodesRequestBuilder } from './BankChargesAllocationCodesRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "BankChargesAllocationCodes" of service "SAPB1".
 */
export class BankChargesAllocationCodes extends Entity implements BankChargesAllocationCodesType {
  /**
   * Technical entity name for BankChargesAllocationCodes.
   */
  static _entityName = 'BankChargesAllocationCodes';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BankChargesAllocationCodes.
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
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
  /**
   * One-to-many navigation property to the [[BusinessPartners]] entity.
   */
  businessPartners!: BusinessPartners[];
  /**
   * One-to-many navigation property to the [[PaymentRunExport]] entity.
   */
  paymentRunExport!: PaymentRunExport[];

  /**
   * Returns an entity builder to construct instances `BankChargesAllocationCodes`.
   * @returns A builder that constructs instances of entity type `BankChargesAllocationCodes`.
   */
  static builder(): EntityBuilderType<BankChargesAllocationCodes, BankChargesAllocationCodesTypeForceMandatory> {
    return Entity.entityBuilder(BankChargesAllocationCodes);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BankChargesAllocationCodes` entity type.
   * @returns A `BankChargesAllocationCodes` request builder.
   */
  static requestBuilder(): BankChargesAllocationCodesRequestBuilder {
    return new BankChargesAllocationCodesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BankChargesAllocationCodes`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BankChargesAllocationCodes`.
   */
  static customField(fieldName: string): CustomField<BankChargesAllocationCodes> {
    return Entity.customFieldSelector(fieldName, BankChargesAllocationCodes);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { PaymentRunExport, PaymentRunExportType } from './PaymentRunExport';

export interface BankChargesAllocationCodesType {
  code?: string;
  description?: string;
  businessPartners: BusinessPartnersType[];
  paymentRunExport: PaymentRunExportType[];
}

export interface BankChargesAllocationCodesTypeForceMandatory {
  code: string;
  description: string;
  businessPartners: BusinessPartnersType[];
  paymentRunExport: PaymentRunExportType[];
}

export namespace BankChargesAllocationCodes {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<BankChargesAllocationCodes> = new StringField('Code', BankChargesAllocationCodes, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<BankChargesAllocationCodes> = new StringField('Description', BankChargesAllocationCodes, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNERS: OneToManyLink<BankChargesAllocationCodes, BusinessPartners> = new OneToManyLink('BusinessPartners', BankChargesAllocationCodes, BusinessPartners);
  /**
   * Static representation of the one-to-many navigation property [[paymentRunExport]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_RUN_EXPORT: OneToManyLink<BankChargesAllocationCodes, PaymentRunExport> = new OneToManyLink('PaymentRunExport', BankChargesAllocationCodes, PaymentRunExport);
  /**
   * All fields of the BankChargesAllocationCodes entity.
   */
  export const _allFields: Array<StringField<BankChargesAllocationCodes> | OneToManyLink<BankChargesAllocationCodes, BusinessPartners> | OneToManyLink<BankChargesAllocationCodes, PaymentRunExport>> = [
    BankChargesAllocationCodes.CODE,
    BankChargesAllocationCodes.DESCRIPTION,
    BankChargesAllocationCodes.BUSINESS_PARTNERS,
    BankChargesAllocationCodes.PAYMENT_RUN_EXPORT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BankChargesAllocationCodes> = new AllFields('*', BankChargesAllocationCodes);
  /**
   * All key fields of the BankChargesAllocationCodes entity.
   */
  export const _keyFields: Array<Field<BankChargesAllocationCodes>> = [BankChargesAllocationCodes.CODE];
  /**
   * Mapping of all key field names to the respective static field property BankChargesAllocationCodes.
   */
  export const _keys: { [keys: string]: Field<BankChargesAllocationCodes> } = BankChargesAllocationCodes._keyFields.reduce((acc: { [keys: string]: Field<BankChargesAllocationCodes> }, field: Field<BankChargesAllocationCodes>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
