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
 * EwbTransporterParams
 */
export interface EwbTransporterParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Transporter Code.
   * @nullable
   */
  transporterCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Transporter Name.
   * @nullable
   */
  transporterName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Transporter Id.
   * @nullable
   */
  transporterId?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * EwbTransporterParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EwbTransporterParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EwbTransporterParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EwbTransporterParams.absEntry} property for query construction.
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
   * Representation of the {@link EwbTransporterParams.transporterCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transporterCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TransporterCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EwbTransporterParams.transporterName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transporterName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TransporterName',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EwbTransporterParams.transporterId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transporterId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TransporterID', 'Edm.String', true);

  /**
   * Creates an instance of EwbTransporterParamsField.
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
      EwbTransporterParams,
      fieldOptions
    );
  }
}

export namespace EwbTransporterParams {
  /**
   * Metadata information on all properties of the `EwbTransporterParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EwbTransporterParams>[] = [
    {
      originalName: 'AbsEntry',
      name: 'absEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TransporterCode',
      name: 'transporterCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TransporterName',
      name: 'transporterName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TransporterID',
      name: 'transporterId',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
