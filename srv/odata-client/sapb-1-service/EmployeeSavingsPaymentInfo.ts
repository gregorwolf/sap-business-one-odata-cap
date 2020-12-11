/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ContractSequenceEnum } from './ContractSequenceEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
  /**
   * Sequence.
   * @nullable
   */
  sequence?: ContractSequenceEnum;
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
export class EmployeeSavingsPaymentInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeSavingsPaymentInfo> {
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
  /**
   * Representation of the [[EmployeeSavingsPaymentInfo.sequence]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequence: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Sequence', this);

  /**
   * Creates an instance of EmployeeSavingsPaymentInfoField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EmployeeSavingsPaymentInfo);
  }
}

export namespace EmployeeSavingsPaymentInfo {
  /**
   * Metadata information on all properties of the `EmployeeSavingsPaymentInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeSavingsPaymentInfo>[] = [{
    originalName: 'EmployeeID',
    name: 'employeeId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ContractName',
    name: 'contractName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PaymentNotes',
    name: 'paymentNotes',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AN',
    name: 'an',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'ANcurrency',
    name: 'aNcurrency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AG',
    name: 'ag',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AGcurrency',
    name: 'aGcurrency',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BankName',
    name: 'bankName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BankCode',
    name: 'bankCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BankAccount',
    name: 'bankAccount',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Sequence',
    name: 'sequence',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EmployeeSavingsPaymentInfo {
    return deserializeComplexTypeV4(json, EmployeeSavingsPaymentInfo);
  }
}
