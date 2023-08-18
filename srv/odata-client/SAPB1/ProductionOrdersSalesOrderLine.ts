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
 * ProductionOrdersSalesOrderLine
 */
export interface ProductionOrdersSalesOrderLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Number.
   * @nullable
   */
  baseNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Abs Entry.
   * @nullable
   */
  baseAbsEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Base Line.
   * @nullable
   */
  baseLine?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * ProductionOrdersSalesOrderLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ProductionOrdersSalesOrderLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ProductionOrdersSalesOrderLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ProductionOrdersSalesOrderLine.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link ProductionOrdersSalesOrderLine.baseNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link ProductionOrdersSalesOrderLine.baseAbsEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseAbsEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseAbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link ProductionOrdersSalesOrderLine.baseLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLine: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseLine', 'Edm.Int32', true);

  /**
   * Creates an instance of ProductionOrdersSalesOrderLineField.
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
      ProductionOrdersSalesOrderLine,
      fieldOptions
    );
  }
}

export namespace ProductionOrdersSalesOrderLine {
  /**
   * Metadata information on all properties of the `ProductionOrdersSalesOrderLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ProductionOrdersSalesOrderLine>[] =
    [
      {
        originalName: 'DocEntry',
        name: 'docEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'BaseNumber',
        name: 'baseNumber',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'BaseAbsEntry',
        name: 'baseAbsEntry',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'BaseLine',
        name: 'baseLine',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}
