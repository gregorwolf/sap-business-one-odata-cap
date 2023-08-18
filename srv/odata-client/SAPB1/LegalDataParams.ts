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
 * LegalDataParams
 */
export interface LegalDataParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Source Object Type.
   * @nullable
   */
  sourceObjectType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Source Object Entry.
   * @nullable
   */
  sourceObjectEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * LegalDataParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class LegalDataParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  LegalDataParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link LegalDataParams.docEntry} property for query construction.
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
   * Representation of the {@link LegalDataParams.sourceObjectType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceObjectType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SourceObjectType',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link LegalDataParams.sourceObjectEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceObjectEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SourceObjectEntry',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of LegalDataParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, LegalDataParams, fieldOptions);
  }
}

export namespace LegalDataParams {
  /**
   * Metadata information on all properties of the `LegalDataParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<LegalDataParams>[] = [
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SourceObjectType',
      name: 'sourceObjectType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SourceObjectEntry',
      name: 'sourceObjectEntry',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
