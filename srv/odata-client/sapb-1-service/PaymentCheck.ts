/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PaymentCheck
 */
export interface PaymentCheck {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: Moment;
  /**
   * Check Number.
   * @nullable
   */
  checkNumber?: number;
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: string;
  /**
   * Branch.
   * @nullable
   */
  branch?: string;
  /**
   * Accountt Num.
   * @nullable
   */
  accounttNum?: string;
  /**
   * Details.
   * @nullable
   */
  details?: string;
  /**
   * Trnsfrable.
   * @nullable
   */
  trnsfrable?: BoYesNoEnum;
  /**
   * Check Sum.
   * @nullable
   */
  checkSum?: number;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Country Code.
   * @nullable
   */
  countryCode?: string;
  /**
   * Check Abs Entry.
   * @nullable
   */
  checkAbsEntry?: number;
  /**
   * Check Account.
   * @nullable
   */
  checkAccount?: string;
  /**
   * Manual Check.
   * @nullable
   */
  manualCheck?: BoYesNoEnum;
  /**
   * Fiscal Id.
   * @nullable
   */
  fiscalId?: string;
  /**
   * Originally Issued By.
   * @nullable
   */
  originallyIssuedBy?: string;
  /**
   * Endorse.
   * @nullable
   */
  endorse?: BoYesNoEnum;
  /**
   * Endorsable Check No.
   * @nullable
   */
  endorsableCheckNo?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PaymentCheck.build]] instead.
 */
export function createPaymentCheck(json: any): PaymentCheck {
  return PaymentCheck.build(json);
}

/**
 * PaymentCheckField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentCheckField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PaymentCheck> {
  /**
   * Representation of the [[PaymentCheck.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentCheck.dueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DueDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PaymentCheck.checkNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CheckNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentCheck.bankCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankCode', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.branch]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  branch: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Branch', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.accounttNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accounttNum: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccounttNum', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.details]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Details', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.trnsfrable]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trnsfrable: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Trnsfrable', this);
  /**
   * Representation of the [[PaymentCheck.checkSum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkSum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CheckSum', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentCheck.currency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Currency', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.countryCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  countryCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CountryCode', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.checkAbsEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkAbsEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CheckAbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentCheck.checkAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CheckAccount', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.manualCheck]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manualCheck: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('ManualCheck', this);
  /**
   * Representation of the [[PaymentCheck.fiscalId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fiscalId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FiscalID', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.originallyIssuedBy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originallyIssuedBy: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OriginallyIssuedBy', this, 'Edm.String');
  /**
   * Representation of the [[PaymentCheck.endorse]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endorse: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Endorse', this);
  /**
   * Representation of the [[PaymentCheck.endorsableCheckNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endorsableCheckNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EndorsableCheckNo', this, 'Edm.Int32');

  /**
   * Creates an instance of PaymentCheckField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PaymentCheck);
  }
}

export namespace PaymentCheck {
  /**
   * Metadata information on all properties of the `PaymentCheck` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentCheck>[] = [{
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DueDate',
    name: 'dueDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'CheckNumber',
    name: 'checkNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BankCode',
    name: 'bankCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Branch',
    name: 'branch',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AccounttNum',
    name: 'accounttNum',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Details',
    name: 'details',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Trnsfrable',
    name: 'trnsfrable',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CheckSum',
    name: 'checkSum',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Currency',
    name: 'currency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CountryCode',
    name: 'countryCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CheckAbsEntry',
    name: 'checkAbsEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CheckAccount',
    name: 'checkAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ManualCheck',
    name: 'manualCheck',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'FiscalID',
    name: 'fiscalId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'OriginallyIssuedBy',
    name: 'originallyIssuedBy',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Endorse',
    name: 'endorse',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'EndorsableCheckNo',
    name: 'endorsableCheckNo',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PaymentCheck {
    return deserializeComplexTypeV4(json, PaymentCheck);
  }
}
