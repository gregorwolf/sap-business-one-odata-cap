/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankStatementStatusEnum } from './BankStatementStatusEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * BankStatementParams
 */
export interface BankStatementParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Internal Number.
   * @nullable
   */
  internalNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Bank Account Key.
   * @nullable
   */
  bankAccountKey?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Statement Number.
   * @nullable
   */
  statementNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Statement Date.
   * @nullable
   */
  statementDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Imported.
   * @nullable
   */
  imported?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Starting Balance F.
   * @nullable
   */
  startingBalanceF?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Ending Balance F.
   * @nullable
   */
  endingBalanceF?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Starting Balance L.
   * @nullable
   */
  startingBalanceL?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Ending Balance L.
   * @nullable
   */
  endingBalanceL?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * BankStatementParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BankStatementParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BankStatementParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BankStatementParams.internalNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('InternalNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link BankStatementParams.bankAccountKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankAccountKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BankAccountKey', 'Edm.Int32', true);
  /**
   * Representation of the {@link BankStatementParams.statementNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statementNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StatementNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BankStatementParams.statementDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statementDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StatementDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BankStatementParams.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: EnumField<
    EntityT,
    DeSerializersT,
    BankStatementStatusEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Status',
    BankStatementStatusEnum,
    true
  );
  /**
   * Representation of the {@link BankStatementParams.imported} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  imported: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Imported', BoYesNoEnum, true);
  /**
   * Representation of the {@link BankStatementParams.startingBalanceF} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startingBalanceF: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StartingBalanceF',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BankStatementParams.endingBalanceF} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endingBalanceF: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EndingBalanceF',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BankStatementParams.currency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true);
  /**
   * Representation of the {@link BankStatementParams.startingBalanceL} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  startingBalanceL: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StartingBalanceL',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BankStatementParams.endingBalanceL} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  endingBalanceL: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EndingBalanceL',
    'Edm.Double',
    true
  );

  /**
   * Creates an instance of BankStatementParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, BankStatementParams, fieldOptions);
  }
}

export namespace BankStatementParams {
  /**
   * Metadata information on all properties of the `BankStatementParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BankStatementParams>[] = [
    {
      originalName: 'InternalNumber',
      name: 'internalNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BankAccountKey',
      name: 'bankAccountKey',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StatementNumber',
      name: 'statementNumber',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StatementDate',
      name: 'statementDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Status',
      name: 'status',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Imported',
      name: 'imported',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'StartingBalanceF',
      name: 'startingBalanceF',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'EndingBalanceF',
      name: 'endingBalanceF',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Currency',
      name: 'currency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StartingBalanceL',
      name: 'startingBalanceL',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'EndingBalanceL',
      name: 'endingBalanceL',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
