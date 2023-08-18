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
 * ContractTemplateParams
 */
export interface ContractTemplateParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Template Name.
   * @nullable
   */
  templateName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ContractTemplateParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ContractTemplateParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ContractTemplateParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ContractTemplateParams.templateName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  templateName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TemplateName', 'Edm.String', true);

  /**
   * Creates an instance of ContractTemplateParamsField.
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
      ContractTemplateParams,
      fieldOptions
    );
  }
}

export namespace ContractTemplateParams {
  /**
   * Metadata information on all properties of the `ContractTemplateParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ContractTemplateParams>[] = [
    {
      originalName: 'TemplateName',
      name: 'templateName',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
