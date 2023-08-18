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
 * VmThirdPartyValuesData
 */
export interface VmThirdPartyValuesData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Id.
   * @nullable
   */
  lineId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Third Party System Id.
   * @nullable
   */
  thirdPartySystemId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Third Party Value.
   * @nullable
   */
  thirdPartyValue?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * VmThirdPartyValuesDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class VmThirdPartyValuesDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  VmThirdPartyValuesData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link VmThirdPartyValuesData.absEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link VmThirdPartyValuesData.lineId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineId', 'Edm.Int32', true);
  /**
   * Representation of the {@link VmThirdPartyValuesData.thirdPartySystemId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  thirdPartySystemId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ThirdPartySystemId',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link VmThirdPartyValuesData.thirdPartyValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  thirdPartyValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ThirdPartyValue',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of VmThirdPartyValuesDataField.
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
      VmThirdPartyValuesData,
      fieldOptions
    );
  }
}

export namespace VmThirdPartyValuesData {
  /**
   * Metadata information on all properties of the `VmThirdPartyValuesData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<VmThirdPartyValuesData>[] = [
    {
      originalName: 'AbsEntry',
      name: 'absEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineId',
      name: 'lineId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ThirdPartySystemId',
      name: 'thirdPartySystemId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ThirdPartyValue',
      name: 'thirdPartyValue',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
