/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReconciliationAccountTypeEnum } from './ReconciliationAccountTypeEnum';
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
 * ExternalReconciliationFilterParams
 */
export interface ExternalReconciliationFilterParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Account Code From.
   * @nullable
   */
  accountCodeFrom?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Account Code To.
   * @nullable
   */
  accountCodeTo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Reconciliation Date From.
   * @nullable
   */
  reconciliationDateFrom?: DeserializedType<
    DeSerializersT,
    'Edm.DateTimeOffset'
  >;
  /**
   * Reconciliation Date To.
   * @nullable
   */
  reconciliationDateTo?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Reconciliation No From.
   * @nullable
   */
  reconciliationNoFrom?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Reconciliation No To.
   * @nullable
   */
  reconciliationNoTo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Reconciliation Account Type.
   * @nullable
   */
  reconciliationAccountType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * ExternalReconciliationFilterParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExternalReconciliationFilterParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ExternalReconciliationFilterParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ExternalReconciliationFilterParams.accountCodeFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCodeFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AccountCodeFrom',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ExternalReconciliationFilterParams.accountCodeTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCodeTo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccountCodeTo', 'Edm.String', true);
  /**
   * Representation of the {@link ExternalReconciliationFilterParams.reconciliationDateFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationDateFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReconciliationDateFrom',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ExternalReconciliationFilterParams.reconciliationDateTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationDateTo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReconciliationDateTo',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ExternalReconciliationFilterParams.reconciliationNoFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationNoFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReconciliationNoFrom',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ExternalReconciliationFilterParams.reconciliationNoTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationNoTo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReconciliationNoTo',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ExternalReconciliationFilterParams.reconciliationAccountType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationAccountType: EnumField<
    EntityT,
    DeSerializersT,
    ReconciliationAccountTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ReconciliationAccountType',
    ReconciliationAccountTypeEnum,
    true
  );

  /**
   * Creates an instance of ExternalReconciliationFilterParamsField.
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
      ExternalReconciliationFilterParams,
      fieldOptions
    );
  }
}

export namespace ExternalReconciliationFilterParams {
  /**
   * Metadata information on all properties of the `ExternalReconciliationFilterParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExternalReconciliationFilterParams>[] =
    [
      {
        originalName: 'AccountCodeFrom',
        name: 'accountCodeFrom',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'AccountCodeTo',
        name: 'accountCodeTo',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ReconciliationDateFrom',
        name: 'reconciliationDateFrom',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'ReconciliationDateTo',
        name: 'reconciliationDateTo',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'ReconciliationNoFrom',
        name: 'reconciliationNoFrom',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ReconciliationNoTo',
        name: 'reconciliationNoTo',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'ReconciliationAccountType',
        name: 'reconciliationAccountType',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
