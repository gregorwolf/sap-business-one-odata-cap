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
 * MaterialRevaluationSnbParams
 */
export interface MaterialRevaluationSnbParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Snb Abs Entry.
   * @nullable
   */
  snbAbsEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * New Cost.
   * @nullable
   */
  newCost?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Debit Credit.
   * @nullable
   */
  debitCredit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * System Number.
   * @nullable
   */
  systemNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Lot Number.
   * @nullable
   */
  lotNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Manufacture Number.
   * @nullable
   */
  manufactureNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Admission Date.
   * @nullable
   */
  admissionDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Expiration Date.
   * @nullable
   */
  expirationDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
}

/**
 * MaterialRevaluationSnbParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class MaterialRevaluationSnbParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  MaterialRevaluationSnbParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link MaterialRevaluationSnbParams.snbAbsEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  snbAbsEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SnbAbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link MaterialRevaluationSnbParams.newCost} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  newCost: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NewCost', 'Edm.Double', true);
  /**
   * Representation of the {@link MaterialRevaluationSnbParams.debitCredit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debitCredit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DebitCredit', 'Edm.Double', true);
  /**
   * Representation of the {@link MaterialRevaluationSnbParams.systemNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  systemNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SystemNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link MaterialRevaluationSnbParams.lotNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lotNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LotNumber', 'Edm.String', true);
  /**
   * Representation of the {@link MaterialRevaluationSnbParams.manufactureNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manufactureNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ManufactureNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link MaterialRevaluationSnbParams.admissionDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  admissionDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AdmissionDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link MaterialRevaluationSnbParams.expirationDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expirationDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ExpirationDate',
    'Edm.DateTimeOffset',
    true
  );

  /**
   * Creates an instance of MaterialRevaluationSnbParamsField.
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
      MaterialRevaluationSnbParams,
      fieldOptions
    );
  }
}

export namespace MaterialRevaluationSnbParams {
  /**
   * Metadata information on all properties of the `MaterialRevaluationSnbParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MaterialRevaluationSnbParams>[] =
    [
      {
        originalName: 'SnbAbsEntry',
        name: 'snbAbsEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'NewCost',
        name: 'newCost',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'DebitCredit',
        name: 'debitCredit',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'SystemNumber',
        name: 'systemNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'LotNumber',
        name: 'lotNumber',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ManufactureNumber',
        name: 'manufactureNumber',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'AdmissionDate',
        name: 'admissionDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'ExpirationDate',
        name: 'expirationDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      }
    ];
}
