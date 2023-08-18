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
 * GovPayCodeAuthority
 */
export interface GovPayCodeAuthority<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Bpl Id.
   * @nullable
   */
  bplId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * State.
   * @nullable
   */
  state?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * GovPayCodeAuthorityField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class GovPayCodeAuthorityField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  GovPayCodeAuthority,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link GovPayCodeAuthority.absId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsId', 'Edm.Int32', true);
  /**
   * Representation of the {@link GovPayCodeAuthority.bplId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPLId', 'Edm.Int32', true);
  /**
   * Representation of the {@link GovPayCodeAuthority.state} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('State', 'Edm.String', true);
  /**
   * Representation of the {@link GovPayCodeAuthority.cardCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CardCode', 'Edm.String', true);

  /**
   * Creates an instance of GovPayCodeAuthorityField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, GovPayCodeAuthority, fieldOptions);
  }
}

export namespace GovPayCodeAuthority {
  /**
   * Metadata information on all properties of the `GovPayCodeAuthority` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<GovPayCodeAuthority>[] = [
    {
      originalName: 'AbsId',
      name: 'absId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BPLId',
      name: 'bplId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'State',
      name: 'state',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CardCode',
      name: 'cardCode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
