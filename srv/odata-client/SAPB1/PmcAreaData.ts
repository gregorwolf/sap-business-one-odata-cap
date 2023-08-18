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
 * PmcAreaData
 */
export interface PmcAreaData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Area Id.
   * @nullable
   */
  areaId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Area Name.
   * @nullable
   */
  areaName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * PmcAreaDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmcAreaDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PmcAreaData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PmcAreaData.areaId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  areaId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AreaID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmcAreaData.areaName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  areaName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AreaName', 'Edm.String', true);

  /**
   * Creates an instance of PmcAreaDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PmcAreaData, fieldOptions);
  }
}

export namespace PmcAreaData {
  /**
   * Metadata information on all properties of the `PmcAreaData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmcAreaData>[] = [
    {
      originalName: 'AreaID',
      name: 'areaId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AreaName',
      name: 'areaName',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
