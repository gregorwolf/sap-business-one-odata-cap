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
 * EcmActionDocParams
 */
export interface EcmActionDocParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Protocol.
   * @nullable
   */
  protocol?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Source Type.
   * @nullable
   */
  sourceType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Source Object.
   * @nullable
   */
  sourceObject?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * EcmActionDocParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EcmActionDocParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EcmActionDocParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EcmActionDocParams.protocol} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  protocol: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Protocol', 'Edm.String', true);
  /**
   * Representation of the {@link EcmActionDocParams.sourceType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SourceType', 'Edm.String', true);
  /**
   * Representation of the {@link EcmActionDocParams.sourceObject} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceObject: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SourceObject', 'Edm.Int32', true);

  /**
   * Creates an instance of EcmActionDocParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EcmActionDocParams, fieldOptions);
  }
}

export namespace EcmActionDocParams {
  /**
   * Metadata information on all properties of the `EcmActionDocParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EcmActionDocParams>[] = [
    {
      originalName: 'Protocol',
      name: 'protocol',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SourceType',
      name: 'sourceType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SourceObject',
      name: 'sourceObject',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
