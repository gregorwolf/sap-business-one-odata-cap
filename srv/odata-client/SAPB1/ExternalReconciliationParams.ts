/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * ExternalReconciliationParams
 */
export interface ExternalReconciliationParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Reconciliation No.
   * @nullable
   */
  reconciliationNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * ExternalReconciliationParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExternalReconciliationParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ExternalReconciliationParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ExternalReconciliationParams.accountCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccountCode', 'Edm.String', true);
  /**
   * Representation of the {@link ExternalReconciliationParams.reconciliationNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reconciliationNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReconciliationNo',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of ExternalReconciliationParamsField.
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
      ExternalReconciliationParams,
      fieldOptions
    );
  }
}

export namespace ExternalReconciliationParams {
  /**
   * Metadata information on all properties of the `ExternalReconciliationParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExternalReconciliationParams>[] =
    [
      {
        originalName: 'AccountCode',
        name: 'accountCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ReconciliationNo',
        name: 'reconciliationNo',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
