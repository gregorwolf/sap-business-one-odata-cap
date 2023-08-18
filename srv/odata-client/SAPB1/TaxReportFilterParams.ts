/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxReportFilterType } from './TaxReportFilterType';
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
 * TaxReportFilterParams
 */
export interface TaxReportFilterParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Filter Type.
   * @nullable
   */
  filterType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * TaxReportFilterParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxReportFilterParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TaxReportFilterParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TaxReportFilterParams.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxReportFilterParams.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true);
  /**
   * Representation of the {@link TaxReportFilterParams.filterType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  filterType: EnumField<
    EntityT,
    DeSerializersT,
    TaxReportFilterType,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'FilterType',
    TaxReportFilterType,
    true
  );

  /**
   * Creates an instance of TaxReportFilterParamsField.
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
      TaxReportFilterParams,
      fieldOptions
    );
  }
}

export namespace TaxReportFilterParams {
  /**
   * Metadata information on all properties of the `TaxReportFilterParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxReportFilterParams>[] = [
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Name',
      name: 'name',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FilterType',
      name: 'filterType',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
