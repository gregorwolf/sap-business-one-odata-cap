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
 * SqlQueryParams
 */
export interface SqlQueryParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Sql Code.
   * @nullable
   */
  sqlCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * SqlQueryParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SqlQueryParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SqlQueryParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SqlQueryParams.sqlCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sqlCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SqlCode', 'Edm.String', true);

  /**
   * Creates an instance of SqlQueryParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, SqlQueryParams, fieldOptions);
  }
}

export namespace SqlQueryParams {
  /**
   * Metadata information on all properties of the `SqlQueryParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SqlQueryParams>[] = [
    {
      originalName: 'SqlCode',
      name: 'sqlCode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
