/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReportLayoutCategoryEnum } from './ReportLayoutCategoryEnum';
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
 * ReportLayoutParams
 */
export interface ReportLayoutParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Layout Code.
   * @nullable
   */
  layoutCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Layout Name.
   * @nullable
   */
  layoutName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Category.
   * @nullable
   */
  category?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * ReportLayoutParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportLayoutParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ReportLayoutParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ReportLayoutParams.layoutCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layoutCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LayoutCode', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayoutParams.layoutName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  layoutName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LayoutName', 'Edm.String', true);
  /**
   * Representation of the {@link ReportLayoutParams.category} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  category: EnumField<
    EntityT,
    DeSerializersT,
    ReportLayoutCategoryEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Category',
    ReportLayoutCategoryEnum,
    true
  );

  /**
   * Creates an instance of ReportLayoutParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ReportLayoutParams, fieldOptions);
  }
}

export namespace ReportLayoutParams {
  /**
   * Metadata information on all properties of the `ReportLayoutParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReportLayoutParams>[] = [
    {
      originalName: 'LayoutCode',
      name: 'layoutCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LayoutName',
      name: 'layoutName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Category',
      name: 'category',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
