/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscountGroupBaseObjectEnum } from './DiscountGroupBaseObjectEnum';
import { DiscountGroupDiscountTypeEnum } from './DiscountGroupDiscountTypeEnum';
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
 * DiscountGroupLine
 */
export interface DiscountGroupLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Object Type.
   * @nullable
   */
  objectType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Object Code.
   * @nullable
   */
  objectCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Discount Type.
   * @nullable
   */
  discountType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Discount.
   * @nullable
   */
  discount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Paid Quantity.
   * @nullable
   */
  paidQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Free Quantity.
   * @nullable
   */
  freeQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Maximum Free Quantity.
   * @nullable
   */
  maximumFreeQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * DiscountGroupLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DiscountGroupLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DiscountGroupLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DiscountGroupLine.absEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link DiscountGroupLine.objectType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectType: EnumField<
    EntityT,
    DeSerializersT,
    DiscountGroupBaseObjectEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ObjectType',
    DiscountGroupBaseObjectEnum,
    true
  );
  /**
   * Representation of the {@link DiscountGroupLine.objectCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ObjectCode', 'Edm.String', true);
  /**
   * Representation of the {@link DiscountGroupLine.discountType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountType: EnumField<
    EntityT,
    DeSerializersT,
    DiscountGroupDiscountTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'DiscountType',
    DiscountGroupDiscountTypeEnum,
    true
  );
  /**
   * Representation of the {@link DiscountGroupLine.discount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Discount', 'Edm.Double', true);
  /**
   * Representation of the {@link DiscountGroupLine.paidQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paidQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PaidQuantity', 'Edm.Double', true);
  /**
   * Representation of the {@link DiscountGroupLine.freeQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  freeQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FreeQuantity', 'Edm.Double', true);
  /**
   * Representation of the {@link DiscountGroupLine.maximumFreeQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maximumFreeQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'MaximumFreeQuantity',
    'Edm.Double',
    true
  );

  /**
   * Creates an instance of DiscountGroupLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DiscountGroupLine, fieldOptions);
  }
}

export namespace DiscountGroupLine {
  /**
   * Metadata information on all properties of the `DiscountGroupLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DiscountGroupLine>[] = [
    {
      originalName: 'AbsEntry',
      name: 'absEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ObjectType',
      name: 'objectType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ObjectCode',
      name: 'objectCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DiscountType',
      name: 'discountType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Discount',
      name: 'discount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'PaidQuantity',
      name: 'paidQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'FreeQuantity',
      name: 'freeQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'MaximumFreeQuantity',
      name: 'maximumFreeQuantity',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
