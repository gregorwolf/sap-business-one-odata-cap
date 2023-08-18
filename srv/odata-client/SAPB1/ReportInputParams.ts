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
 * ReportInputParams
 */
export interface ReportInputParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Report Layout Menu Id.
   * @nullable
   */
  reportLayoutMenuId?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ReportInputParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportInputParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ReportInputParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ReportInputParams.reportLayoutMenuId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportLayoutMenuId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ReportLayoutMenuID',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of ReportInputParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ReportInputParams, fieldOptions);
  }
}

export namespace ReportInputParams {
  /**
   * Metadata information on all properties of the `ReportInputParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReportInputParams>[] = [
    {
      originalName: 'ReportLayoutMenuID',
      name: 'reportLayoutMenuId',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
