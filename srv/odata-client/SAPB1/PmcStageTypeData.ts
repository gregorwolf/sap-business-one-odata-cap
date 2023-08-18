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
 * PmcStageTypeData
 */
export interface PmcStageTypeData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Stage Name.
   * @nullable
   */
  stageName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Stage Description.
   * @nullable
   */
  stageDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * PmcStageTypeDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmcStageTypeDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PmcStageTypeData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PmcStageTypeData.stageId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StageID', 'Edm.Int32', true);
  /**
   * Representation of the {@link PmcStageTypeData.stageName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('StageName', 'Edm.String', true);
  /**
   * Representation of the {@link PmcStageTypeData.stageDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'StageDescription',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of PmcStageTypeDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PmcStageTypeData, fieldOptions);
  }
}

export namespace PmcStageTypeData {
  /**
   * Metadata information on all properties of the `PmcStageTypeData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmcStageTypeData>[] = [
    {
      originalName: 'StageID',
      name: 'stageId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'StageName',
      name: 'stageName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'StageDescription',
      name: 'stageDescription',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
