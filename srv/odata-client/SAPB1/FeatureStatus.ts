/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * FeatureStatus
 */
export interface FeatureStatus<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Feature Id.
   * @nullable
   */
  featureId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Blocked.
   * @nullable
   */
  blocked?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * FeatureStatusField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class FeatureStatusField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  FeatureStatus,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link FeatureStatus.featureId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  featureId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FeatureID', 'Edm.String', true);
  /**
   * Representation of the {@link FeatureStatus.blocked} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blocked: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Blocked', BoYesNoEnum, true);

  /**
   * Creates an instance of FeatureStatusField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, FeatureStatus, fieldOptions);
  }
}

export namespace FeatureStatus {
  /**
   * Metadata information on all properties of the `FeatureStatus` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<FeatureStatus>[] = [
    {
      originalName: 'FeatureID',
      name: 'featureId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Blocked',
      name: 'blocked',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}