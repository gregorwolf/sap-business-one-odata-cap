/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoDepositCheckEnum } from './BoDepositCheckEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CheckLine
 */
export interface CheckLine {
  /**
   * Check Key.
   * @nullable
   */
  checkKey?: number;
  /**
   * Check Number.
   * @nullable
   */
  checkNumber?: number;
  /**
   * Bank.
   * @nullable
   */
  bank?: string;
  /**
   * Branch.
   * @nullable
   */
  branch?: string;
  /**
   * Cash Check.
   * @nullable
   */
  cashCheck?: string;
  /**
   * Check Date.
   * @nullable
   */
  checkDate?: Moment;
  /**
   * Customer.
   * @nullable
   */
  customer?: string;
  /**
   * Check Amount.
   * @nullable
   */
  checkAmount?: number;
  /**
   * Deposited.
   * @nullable
   */
  deposited?: BoDepositCheckEnum;
  /**
   * Transferred.
   * @nullable
   */
  transferred?: BoYesNoEnum;
  /**
   * Account Number.
   * @nullable
   */
  accountNumber?: string;
  /**
   * Check Currency.
   * @nullable
   */
  checkCurrency?: string;
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
   * Rejected By Bank.
   * @nullable
   */
  rejectedByBank?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[CheckLine.build]] instead.
 */
export function createCheckLine(json: any): CheckLine {
  return CheckLine.build(json);
}

/**
 * CheckLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CheckLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CheckLine> {
  /**
   * Representation of the [[CheckLine.checkKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkKey: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CheckKey', this, 'Edm.Int32');
  /**
   * Representation of the [[CheckLine.checkNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CheckNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[CheckLine.bank]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bank: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Bank', this, 'Edm.String');
  /**
   * Representation of the [[CheckLine.branch]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  branch: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Branch', this, 'Edm.String');
  /**
   * Representation of the [[CheckLine.cashCheck]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashCheck: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CashCheck', this, 'Edm.String');
  /**
   * Representation of the [[CheckLine.checkDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CheckDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[CheckLine.customer]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customer: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Customer', this, 'Edm.String');
  /**
   * Representation of the [[CheckLine.checkAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CheckAmount', this, 'Edm.Double');
  /**
   * Representation of the [[CheckLine.deposited]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deposited: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Deposited', this);
  /**
   * Representation of the [[CheckLine.transferred]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transferred: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Transferred', this);
  /**
   * Representation of the [[CheckLine.accountNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AccountNumber', this, 'Edm.String');
  /**
   * Representation of the [[CheckLine.checkCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  checkCurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CheckCurrency', this, 'Edm.String');
  /**
   * Representation of the [[CheckLine.fiscalId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fiscalId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FiscalID', this, 'Edm.String');
  /**
   * Representation of the [[CheckLine.originallyIssuedBy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  originallyIssuedBy: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('OriginallyIssuedBy', this, 'Edm.String');
  /**
   * Representation of the [[CheckLine.rejectedByBank]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rejectedByBank: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('RejectedByBank', this);

  /**
   * Creates an instance of CheckLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CheckLine);
  }
}

export namespace CheckLine {
  /**
   * Metadata information on all properties of the `CheckLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CheckLine>[] = [{
    originalName: 'CheckKey',
    name: 'checkKey',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CheckNumber',
    name: 'checkNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Bank',
    name: 'bank',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Branch',
    name: 'branch',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CashCheck',
    name: 'cashCheck',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CheckDate',
    name: 'checkDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Customer',
    name: 'customer',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CheckAmount',
    name: 'checkAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Deposited',
    name: 'deposited',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Transferred',
    name: 'transferred',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AccountNumber',
    name: 'accountNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CheckCurrency',
    name: 'checkCurrency',
    type: 'Edm.String',
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
    originalName: 'RejectedByBank',
    name: 'rejectedByBank',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CheckLine {
    return deserializeComplexTypeV4(json, CheckLine);
  }
}
