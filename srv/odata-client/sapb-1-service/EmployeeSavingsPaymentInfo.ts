/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EmployeeSavingsPaymentInfo
 */
export interface EmployeeSavingsPaymentInfo {
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: number;
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Contract Name.
   * @nullable
   */
  contractName?: string;
  /**
   * Payment Notes.
   * @nullable
   */
  paymentNotes?: string;
  /**
   * An.
   * @nullable
   */
  an?: number;
  /**
   * A Ncurrency.
   * @nullable
   */
  aNcurrency?: string;
  /**
   * Ag.
   * @nullable
   */
  ag?: number;
  /**
   * A Gcurrency.
   * @nullable
   */
  aGcurrency?: string;
  /**
   * Bank Name.
   * @nullable
   */
  bankName?: string;
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: string;
  /**
   * Bank Account.
   * @nullable
   */
  bankAccount?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[EmployeeSavingsPaymentInfo.build]] instead.
 */
export function createEmployeeSavingsPaymentInfo(json: any): EmployeeSavingsPaymentInfo {
  return EmployeeSavingsPaymentInfo.build(json);
}

/**
 * EmployeeSavingsPaymentInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeSavingsPaymentInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EmployeeSavingsPaymentInfo.employeeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EmployeeID', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeSavingsPaymentInfo.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeSavingsPaymentInfo.contractName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contractName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ContractName', this, 'Edm.String');
  /**
   * Representation of the [[EmployeeSavingsPaymentInfo.paymentNotes]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentNotes: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PaymentNotes', this, 'Edm.String');
  /**
   * Representation of the [[EmployeeSavingsPaymentInfo.an]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  an: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AN', this, 'Edm.Double');
  /**
   * Representation of the [[EmployeeSavingsPaymentInfo.aNcurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aNcurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ANcurrency', this, 'Edm.String');
  /**
   * Representation of the [[EmployeeSavingsPaymentInfo.ag]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ag: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AG', this, 'Edm.Double');
  /**
   * Representation of the [[EmployeeSavingsPaymentInfo.aGcurrency]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aGcurrency: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AGcurrency', this, 'Edm.String');
  /**
   * Representation of the [[EmployeeSavingsPaymentInfo.bankName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankName', this, 'Edm.String');
  /**
   * Representation of the [[EmployeeSavingsPaymentInfo.bankCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankCode', this, 'Edm.String');
  /**
   * Representation of the [[EmployeeSavingsPaymentInfo.bankAccount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankAccount: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BankAccount', this, 'Edm.String');
}

export namespace EmployeeSavingsPaymentInfo {
  export function build(json: { [keys: string]: FieldType }): EmployeeSavingsPaymentInfo {
    return createComplexType(json, {
      EmployeeID: (employeeId: number) => ({ employeeId: edmToTs(employeeId, 'Edm.Int32') }),
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      ContractName: (contractName: string) => ({ contractName: edmToTs(contractName, 'Edm.String') }),
      PaymentNotes: (paymentNotes: string) => ({ paymentNotes: edmToTs(paymentNotes, 'Edm.String') }),
      AN: (an: number) => ({ an: edmToTs(an, 'Edm.Double') }),
      ANcurrency: (aNcurrency: string) => ({ aNcurrency: edmToTs(aNcurrency, 'Edm.String') }),
      AG: (ag: number) => ({ ag: edmToTs(ag, 'Edm.Double') }),
      AGcurrency: (aGcurrency: string) => ({ aGcurrency: edmToTs(aGcurrency, 'Edm.String') }),
      BankName: (bankName: string) => ({ bankName: edmToTs(bankName, 'Edm.String') }),
      BankCode: (bankCode: string) => ({ bankCode: edmToTs(bankCode, 'Edm.String') }),
      BankAccount: (bankAccount: string) => ({ bankAccount: edmToTs(bankAccount, 'Edm.String') })
    });
  }
}
