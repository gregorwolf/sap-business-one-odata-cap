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
 * ReportLayoutPrintParams
 */
export interface ReportLayoutPrintParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Layout Code.
   * @nullable
   */
  layoutCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * ReportLayoutPrintParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportLayoutPrintParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ReportLayoutPrintParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ReportLayoutPrintParams.layoutCode} property for query construction.
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
   * Representation of the {@link ReportLayoutPrintParams.docEntry} property for query construction.
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
   * Creates an instance of ReportLayoutPrintParamsField.
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
      ReportLayoutPrintParams,
      fieldOptions
    );
  }
}

export namespace ReportLayoutPrintParams {
  /**
   * Metadata information on all properties of the `ReportLayoutPrintParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReportLayoutPrintParams>[] =
    [
      {
        originalName: 'LayoutCode',
        name: 'layoutCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DocEntry',
        name: 'docEntry',
        type: 'Edm.Int32',
        isCollection: false
      }
    ];
}