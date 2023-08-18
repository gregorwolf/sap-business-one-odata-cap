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
 * DeductionTaxHierarchiesLine
 */
export interface DeductionTaxHierarchiesLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Row Number.
   * @nullable
   */
  rowNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Deduction Percent.
   * @nullable
   */
  deductionPercent?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Maximum Total.
   * @nullable
   */
  maximumTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * DeductionTaxHierarchiesLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DeductionTaxHierarchiesLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DeductionTaxHierarchiesLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DeductionTaxHierarchiesLine.rowNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link DeductionTaxHierarchiesLine.deductionPercent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deductionPercent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeductionPercent',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link DeductionTaxHierarchiesLine.maximumTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maximumTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MaximumTotal', 'Edm.Double', true);

  /**
   * Creates an instance of DeductionTaxHierarchiesLineField.
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
      DeductionTaxHierarchiesLine,
      fieldOptions
    );
  }
}

export namespace DeductionTaxHierarchiesLine {
  /**
   * Metadata information on all properties of the `DeductionTaxHierarchiesLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DeductionTaxHierarchiesLine>[] =
    [
      {
        originalName: 'RowNumber',
        name: 'rowNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'DeductionPercent',
        name: 'deductionPercent',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'MaximumTotal',
        name: 'maximumTotal',
        type: 'Edm.Double',
        isCollection: false
      }
    ];
}
