/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EwbSupplyTypeEnum } from './EwbSupplyTypeEnum';
import { EwbTransactionTypeEnum } from './EwbTransactionTypeEnum';
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
 * EWayBillDetails
 */
export interface EWayBillDetails<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Supply Type.
   * @nullable
   */
  supplyType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Sub Type.
   * @nullable
   */
  subType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Document Type.
   * @nullable
   */
  documentType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Transportation Mode.
   * @nullable
   */
  transportationMode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Distance.
   * @nullable
   */
  distance?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Transporter Doc No.
   * @nullable
   */
  transporterDocNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Transporter Doc Date.
   * @nullable
   */
  transporterDocDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
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
  /**
   * E Way Bill No.
   * @nullable
   */
  eWayBillNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * E Way Bill Date.
   * @nullable
   */
  eWayBillDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Bill From Name.
   * @nullable
   */
  billFromName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill From Gstin.
   * @nullable
   */
  billFromGstin?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill From State Gst Code.
   * @nullable
   */
  billFromStateGstCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Dispatch From Address 1.
   * @nullable
   */
  dispatchFromAddress1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Dispatch From Address 2.
   * @nullable
   */
  dispatchFromAddress2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Dispatch From Zip Code.
   * @nullable
   */
  dispatchFromZipCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Dispatch From State Gst Code.
   * @nullable
   */
  dispatchFromStateGstCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Name.
   * @nullable
   */
  billToName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Gstin.
   * @nullable
   */
  billToGstin?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To State Gst Code.
   * @nullable
   */
  billToStateGstCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Address 1.
   * @nullable
   */
  shipToAddress1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Address 2.
   * @nullable
   */
  shipToAddress2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Zip Code.
   * @nullable
   */
  shipToZipCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To State Gst Code.
   * @nullable
   */
  shipToStateGstCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Main Hsn Entry.
   * @nullable
   */
  mainHsnEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Dispatch From Place.
   * @nullable
   */
  dispatchFromPlace?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Place.
   * @nullable
   */
  shipToPlace?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Transporter Id.
   * @nullable
   */
  transporterId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Transporter Name.
   * @nullable
   */
  transporterName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * E Way Bill Expiration Date.
   * @nullable
   */
  eWayBillExpirationDate?: DeserializedType<
    DeSerializersT,
    'Edm.DateTimeOffset'
  >;
  /**
   * Transporter Entry.
   * @nullable
   */
  transporterEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Transporter Line Number.
   * @nullable
   */
  transporterLineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Transaction Type.
   * @nullable
   */
  transactionType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * EWayBillDetailsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class EWayBillDetailsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  EWayBillDetails,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link EWayBillDetails.docEntry} property for query construction.
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
   * Representation of the {@link EWayBillDetails.supplyType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  supplyType: EnumField<
    EntityT,
    DeSerializersT,
    EwbSupplyTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('SupplyType', EwbSupplyTypeEnum, true);
  /**
   * Representation of the {@link EWayBillDetails.subType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SubType', 'Edm.Int32', true);
  /**
   * Representation of the {@link EWayBillDetails.documentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocumentType', 'Edm.String', true);
  /**
   * Representation of the {@link EWayBillDetails.transportationMode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transportationMode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TransportationMode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link EWayBillDetails.distance} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distance: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Distance', 'Edm.Double', true);
  /**
   * Representation of the {@link EWayBillDetails.transporterDocNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transporterDocNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TransporterDocNo',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EWayBillDetails.transporterDocDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transporterDocDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TransporterDocDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EWayBillDetails.vehicleType} property for query construction.
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
   * Representation of the {@link EWayBillDetails.vehicleNo} property for query construction.
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
   * Representation of the {@link EWayBillDetails.eWayBillNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eWayBillNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EWayBillNo', 'Edm.String', true);
  /**
   * Representation of the {@link EWayBillDetails.eWayBillDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eWayBillDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EWayBillDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EWayBillDetails.billFromName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billFromName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillFromName', 'Edm.String', true);
  /**
   * Representation of the {@link EWayBillDetails.billFromGstin} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billFromGstin: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillFromGSTIN', 'Edm.String', true);
  /**
   * Representation of the {@link EWayBillDetails.billFromStateGstCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billFromStateGstCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillFromStateGSTCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EWayBillDetails.dispatchFromAddress1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dispatchFromAddress1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DispatchFromAddress1',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EWayBillDetails.dispatchFromAddress2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dispatchFromAddress2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DispatchFromAddress2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EWayBillDetails.dispatchFromZipCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dispatchFromZipCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DispatchFromZipCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EWayBillDetails.dispatchFromStateGstCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dispatchFromStateGstCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DispatchFromStateGSTCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EWayBillDetails.billToName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillToName', 'Edm.String', true);
  /**
   * Representation of the {@link EWayBillDetails.billToGstin} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToGstin: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillToGSTIN', 'Edm.String', true);
  /**
   * Representation of the {@link EWayBillDetails.billToStateGstCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToStateGstCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillToStateGSTCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EWayBillDetails.shipToAddress1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToAddress1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipToAddress1',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EWayBillDetails.shipToAddress2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToAddress2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipToAddress2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EWayBillDetails.shipToZipCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToZipCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToZipCode', 'Edm.String', true);
  /**
   * Representation of the {@link EWayBillDetails.shipToStateGstCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToStateGstCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipToStateGSTCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EWayBillDetails.mainHsnEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mainHsnEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MainHSNEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link EWayBillDetails.dispatchFromPlace} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dispatchFromPlace: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DispatchFromPlace',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link EWayBillDetails.shipToPlace} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToPlace: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToPlace', 'Edm.String', true);
  /**
   * Representation of the {@link EWayBillDetails.transporterId} property for query construction.
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
   * Representation of the {@link EWayBillDetails.transporterName} property for query construction.
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
   * Representation of the {@link EWayBillDetails.eWayBillExpirationDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eWayBillExpirationDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EWayBillExpirationDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link EWayBillDetails.transporterEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transporterEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TransporterEntry',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link EWayBillDetails.transporterLineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transporterLineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TransporterLineNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link EWayBillDetails.transactionType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transactionType: EnumField<
    EntityT,
    DeSerializersT,
    EwbTransactionTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'TransactionType',
    EwbTransactionTypeEnum,
    true
  );

  /**
   * Creates an instance of EWayBillDetailsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, EWayBillDetails, fieldOptions);
  }
}

export namespace EWayBillDetails {
  /**
   * Metadata information on all properties of the `EWayBillDetails` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EWayBillDetails>[] = [
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'SupplyType',
      name: 'supplyType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'SubType',
      name: 'subType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocumentType',
      name: 'documentType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TransportationMode',
      name: 'transportationMode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Distance',
      name: 'distance',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'TransporterDocNo',
      name: 'transporterDocNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TransporterDocDate',
      name: 'transporterDocDate',
      type: 'Edm.DateTimeOffset',
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
    },
    {
      originalName: 'EWayBillNo',
      name: 'eWayBillNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EWayBillDate',
      name: 'eWayBillDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'BillFromName',
      name: 'billFromName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillFromGSTIN',
      name: 'billFromGstin',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillFromStateGSTCode',
      name: 'billFromStateGstCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DispatchFromAddress1',
      name: 'dispatchFromAddress1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DispatchFromAddress2',
      name: 'dispatchFromAddress2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DispatchFromZipCode',
      name: 'dispatchFromZipCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DispatchFromStateGSTCode',
      name: 'dispatchFromStateGstCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillToName',
      name: 'billToName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillToGSTIN',
      name: 'billToGstin',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BillToStateGSTCode',
      name: 'billToStateGstCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToAddress1',
      name: 'shipToAddress1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToAddress2',
      name: 'shipToAddress2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToZipCode',
      name: 'shipToZipCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToStateGSTCode',
      name: 'shipToStateGstCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'MainHSNEntry',
      name: 'mainHsnEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DispatchFromPlace',
      name: 'dispatchFromPlace',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ShipToPlace',
      name: 'shipToPlace',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TransporterID',
      name: 'transporterId',
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
      originalName: 'EWayBillExpirationDate',
      name: 'eWayBillExpirationDate',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'TransporterEntry',
      name: 'transporterEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TransporterLineNumber',
      name: 'transporterLineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TransactionType',
      name: 'transactionType',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
