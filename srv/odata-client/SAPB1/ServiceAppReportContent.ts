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
 * ServiceAppReportContent
 */
export interface ServiceAppReportContent<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Report Content.
   * @nullable
   */
  reportContent?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ServiceAppReportContentField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceAppReportContentField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ServiceAppReportContent,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ServiceAppReportContent.reportContent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reportContent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ReportContent', 'Edm.String', true);

  /**
   * Creates an instance of ServiceAppReportContentField.
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
      ServiceAppReportContent,
      fieldOptions
    );
  }
}

export namespace ServiceAppReportContent {
  /**
   * Metadata information on all properties of the `ServiceAppReportContent` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceAppReportContent>[] =
    [
      {
        originalName: 'ReportContent',
        name: 'reportContent',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
