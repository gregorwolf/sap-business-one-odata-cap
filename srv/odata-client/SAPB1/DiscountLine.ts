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
 * DiscountLine
 */
export interface DiscountLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Discount Code.
   * @nullable
   */
  discountCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Line Id.
   * @nullable
   */
  lineId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Num Of Days.
   * @nullable
   */
  numOfDays?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Discount.
   * @nullable
   */
  discount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Day.
   * @nullable
   */
  day?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Month.
   * @nullable
   */
  month?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * DiscountLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DiscountLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DiscountLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DiscountLine.discountCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discountCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DiscountCode', 'Edm.String', true);
  /**
   * Representation of the {@link DiscountLine.lineId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineId', 'Edm.Int32', true);
  /**
   * Representation of the {@link DiscountLine.numOfDays} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numOfDays: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NumOfDays', 'Edm.Int32', true);
  /**
   * Representation of the {@link DiscountLine.discount} property for query construction.
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
   * Representation of the {@link DiscountLine.day} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  day: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Day', 'Edm.Int32', true);
  /**
   * Representation of the {@link DiscountLine.month} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  month: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Month', 'Edm.Int32', true);

  /**
   * Creates an instance of DiscountLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DiscountLine, fieldOptions);
  }
}

export namespace DiscountLine {
  /**
   * Metadata information on all properties of the `DiscountLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DiscountLine>[] = [
    {
      originalName: 'DiscountCode',
      name: 'discountCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LineId',
      name: 'lineId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'NumOfDays',
      name: 'numOfDays',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Discount',
      name: 'discount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Day',
      name: 'day',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Month',
      name: 'month',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
