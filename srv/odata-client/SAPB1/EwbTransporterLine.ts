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
 * EwbTransporterLine
 */
export interface EwbTransporterLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Mode.
   * @nullable
   */
  mode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Vehicle Type.
   * @nullable
   */
  vehicleType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Vehicle No.
   * @nullable
   */
  vehicleNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * EwbTransporterLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EwbTransporterLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EwbTransporterLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EwbTransporterLine.absEntry} property for query construction.
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
   * Representation of the {@link EwbTransporterLine.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link EwbTransporterLine.mode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Mode', 'Edm.Int32', true);
  /**
   * Representation of the {@link EwbTransporterLine.vehicleType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vehicleType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VehicleType', 'Edm.String', true);
  /**
   * Representation of the {@link EwbTransporterLine.vehicleNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vehicleNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VehicleNo', 'Edm.String', true);

  /**
   * Creates an instance of EwbTransporterLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EwbTransporterLine, fieldOptions);
  }
}

export namespace EwbTransporterLine {
  /**
   * Metadata information on all properties of the `EwbTransporterLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EwbTransporterLine>[] = [
    {
      originalName: 'AbsEntry',
      name: 'absEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Mode',
      name: 'mode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'VehicleType',
      name: 'vehicleType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VehicleNo',
      name: 'vehicleNo',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
