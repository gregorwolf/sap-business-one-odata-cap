/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ContractSequenceEnum } from './ContractSequenceEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * EmployeeSavingsPaymentInfo
 */
export interface EmployeeSavingsPaymentInfo<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Contract Name.
   * @nullable
   */
  contractName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Payment Notes.
   * @nullable
   */
  paymentNotes?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * An.
   * @nullable
   */
  an?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * A Ncurrency.
   * @nullable
   */
  aNcurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ag.
   * @nullable
   */
  ag?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * A Gcurrency.
   * @nullable
   */
  aGcurrency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bank Name.
   * @nullable
   */
  bankName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bank Code.
   * @nullable
   */
  bankCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bank Account.
   * @nullable
   */
  bankAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sequence.
   * @nullable
   */
  sequence?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * EmployeeSavingsPaymentInfoField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeSavingsPaymentInfoField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EmployeeSavingsPaymentInfo,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EmployeeSavingsPaymentInfo.employeeId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EmployeeID', 'Edm.Int32', true);
  /**
   * Representation of the {@link EmployeeSavingsPaymentInfo.lineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link EmployeeSavingsPaymentInfo.contractName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  contractName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ContractName', 'Edm.String', true);
  /**
   * Representation of the {@link EmployeeSavingsPaymentInfo.paymentNotes} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentNotes: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PaymentNotes', 'Edm.String', true);
  /**
   * Representation of the {@link EmployeeSavingsPaymentInfo.an} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  an: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AN', 'Edm.Double', true);
  /**
   * Representation of the {@link EmployeeSavingsPaymentInfo.aNcurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aNcurrency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ANcurrency', 'Edm.String', true);
  /**
   * Representation of the {@link EmployeeSavingsPaymentInfo.ag} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ag: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AG', 'Edm.Double', true);
  /**
   * Representation of the {@link EmployeeSavingsPaymentInfo.aGcurrency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aGcurrency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AGcurrency', 'Edm.String', true);
  /**
   * Representation of the {@link EmployeeSavingsPaymentInfo.bankName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BankName', 'Edm.String', true);
  /**
   * Representation of the {@link EmployeeSavingsPaymentInfo.bankCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BankCode', 'Edm.String', true);
  /**
   * Representation of the {@link EmployeeSavingsPaymentInfo.bankAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BankAccount', 'Edm.String', true);
  /**
   * Representation of the {@link EmployeeSavingsPaymentInfo.sequence} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequence: EnumField<
    EntityT,
    DeSerializersT,
    ContractSequenceEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('Sequence', ContractSequenceEnum, true);

  /**
   * Creates an instance of EmployeeSavingsPaymentInfoField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      EmployeeSavingsPaymentInfo,
      fieldOptions
    );
  }
}

export namespace EmployeeSavingsPaymentInfo {
  /**
   * Metadata information on all properties of the `EmployeeSavingsPaymentInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeSavingsPaymentInfo>[] =
    [
      {
        originalName: 'EmployeeID',
        name: 'employeeId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'LineNum',
        name: 'lineNum',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ContractName',
        name: 'contractName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'PaymentNotes',
        name: 'paymentNotes',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'AN',
        name: 'an',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'ANcurrency',
        name: 'aNcurrency',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'AG',
        name: 'ag',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'AGcurrency',
        name: 'aGcurrency',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BankName',
        name: 'bankName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BankCode',
        name: 'bankCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BankAccount',
        name: 'bankAccount',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Sequence',
        name: 'sequence',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
