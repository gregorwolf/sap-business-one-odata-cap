/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RelatedDocument } from './RelatedDocument';
import { ElectronicDocProtocolCodeEnum } from './ElectronicDocProtocolCodeEnum';
import { ElectronicDocGenTypeEnum } from './ElectronicDocGenTypeEnum';
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
 * ElectronicProtocol
 */
export interface ElectronicProtocol<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Protocol Code.
   * @nullable
   */
  protocolCode?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Generation Type.
   * @nullable
   */
  generationType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Mapping Id.
   * @nullable
   */
  mappingId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Testing Mode.
   * @nullable
   */
  testingMode?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Confirmation.
   * @nullable
   */
  confirmation?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * E Doc Type.
   * @nullable
   */
  eDocType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Cf Di Cancellation Reason.
   * @nullable
   */
  cfDiCancellationReason?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cf Di Cancellation Response.
   * @nullable
   */
  cfDiCancellationResponse?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Related Documents.
   * @nullable
   */
  relatedDocuments?: DeserializedType<DeSerializersT, 'SAPB1.RelatedDocument'>;
  /**
   * E Books Relevant.
   * @nullable
   */
  eBooksRelevant?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * E Books Mark.
   * @nullable
   */
  eBooksMark?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * E Books Mar Kof Negative.
   * @nullable
   */
  eBooksMarKofNegative?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * E Books Invoice Type.
   * @nullable
   */
  eBooksInvoiceType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * E Books Invoice Typeof Negative.
   * @nullable
   */
  eBooksInvoiceTypeofNegative?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * E Billing Irn.
   * @nullable
   */
  eBillingIrn?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Eetpkp.
   * @nullable
   */
  eetpkp?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Eetbkp.
   * @nullable
   */
  eetbkp?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Signature Input Message.
   * @nullable
   */
  signatureInputMessage?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Signature Digest.
   * @nullable
   */
  signatureDigest?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fecha Timbrado.
   * @nullable
   */
  fechaTimbrado?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sello Sat.
   * @nullable
   */
  selloSat?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Payment Method.
   * @nullable
   */
  paymentMethod?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Rfc Prov Certif.
   * @nullable
   */
  rfcProvCertif?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * No Certificado Sat.
   * @nullable
   */
  noCertificadoSat?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fpa Sequence Number.
   * @nullable
   */
  fpaSequenceNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Fpa Send Date Sdi.
   * @nullable
   */
  fpaSendDateSdi?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Fpa Progressivo.
   * @nullable
   */
  fpaProgressivo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Protocol Description.
   * @nullable
   */
  protocolDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cf Di Export.
   * @nullable
   */
  cfDiExport?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * E Billing Ack No.
   * @nullable
   */
  eBillingAckNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * E Billing Ack Dt.
   * @nullable
   */
  eBillingAckDt?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * E Billing Signed Invoice.
   * @nullable
   */
  eBillingSignedInvoice?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * E Billing Signed Qr Code.
   * @nullable
   */
  eBillingSignedQrCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * E Billing Response Status.
   * @nullable
   */
  eBillingResponseStatus?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cf Di Cancellation Reference.
   * @nullable
   */
  cfDiCancellationReference?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ElectronicProtocolField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ElectronicProtocolField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ElectronicProtocol,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ElectronicProtocol.protocolCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  protocolCode: EnumField<
    EntityT,
    DeSerializersT,
    ElectronicDocProtocolCodeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'ProtocolCode',
    ElectronicDocProtocolCodeEnum,
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.generationType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  generationType: EnumField<
    EntityT,
    DeSerializersT,
    ElectronicDocGenTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'GenerationType',
    ElectronicDocGenTypeEnum,
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.mappingId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mappingId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MappingID', 'Edm.Int32', true);
  /**
   * Representation of the {@link ElectronicProtocol.testingMode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  testingMode: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('TestingMode', BoYesNoEnum, true);
  /**
   * Representation of the {@link ElectronicProtocol.confirmation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  confirmation: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Confirmation', 'Edm.String', true);
  /**
   * Representation of the {@link ElectronicProtocol.eDocType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eDocType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EDocType', 'Edm.Int32', true);
  /**
   * Representation of the {@link ElectronicProtocol.cfDiCancellationReason} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cfDiCancellationReason: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CFDiCancellationReason',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.cfDiCancellationResponse} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cfDiCancellationResponse: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CFDiCancellationResponse',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.relatedDocuments} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relatedDocuments: CollectionField<
    EntityT,
    DeSerializersT,
    RelatedDocument,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'RelatedDocuments',
    RelatedDocument,
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.eBooksRelevant} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eBooksRelevant: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('EBooksRelevant', BoYesNoEnum, true);
  /**
   * Representation of the {@link ElectronicProtocol.eBooksMark} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eBooksMark: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EBooksMARK', 'Edm.String', true);
  /**
   * Representation of the {@link ElectronicProtocol.eBooksMarKofNegative} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eBooksMarKofNegative: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EBooksMARKofNegative',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.eBooksInvoiceType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eBooksInvoiceType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EBooksInvoiceType',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.eBooksInvoiceTypeofNegative} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eBooksInvoiceTypeofNegative: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EBooksInvoiceTypeofNegative',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.eBillingIrn} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eBillingIrn: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EBillingIRN', 'Edm.String', true);
  /**
   * Representation of the {@link ElectronicProtocol.eetpkp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eetpkp: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EETPKP', 'Edm.String', true);
  /**
   * Representation of the {@link ElectronicProtocol.eetbkp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eetbkp: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EETBKP', 'Edm.String', true);
  /**
   * Representation of the {@link ElectronicProtocol.signatureInputMessage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  signatureInputMessage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SignatureInputMessage',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.signatureDigest} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  signatureDigest: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SignatureDigest',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.fechaTimbrado} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fechaTimbrado: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FechaTimbrado', 'Edm.String', true);
  /**
   * Representation of the {@link ElectronicProtocol.selloSat} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  selloSat: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SelloSAT', 'Edm.String', true);
  /**
   * Representation of the {@link ElectronicProtocol.paymentMethod} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  paymentMethod: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PaymentMethod', 'Edm.String', true);
  /**
   * Representation of the {@link ElectronicProtocol.rfcProvCertif} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rfcProvCertif: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RfcProvCertif', 'Edm.String', true);
  /**
   * Representation of the {@link ElectronicProtocol.noCertificadoSat} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  noCertificadoSat: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NoCertificadoSAT',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.fpaSequenceNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fpaSequenceNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FPASequenceNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.fpaSendDateSdi} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fpaSendDateSdi: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FPASendDateSDI',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.fpaProgressivo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fpaProgressivo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FPAProgressivo',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.protocolDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  protocolDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ProtocolDescription',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.cfDiExport} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cfDiExport: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CFDiExport', 'Edm.String', true);
  /**
   * Representation of the {@link ElectronicProtocol.eBillingAckNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eBillingAckNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EBillingAckNo', 'Edm.String', true);
  /**
   * Representation of the {@link ElectronicProtocol.eBillingAckDt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eBillingAckDt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('EBillingAckDt', 'Edm.String', true);
  /**
   * Representation of the {@link ElectronicProtocol.eBillingSignedInvoice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eBillingSignedInvoice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EBillingSignedInvoice',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.eBillingSignedQrCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eBillingSignedQrCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EBillingSignedQRCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.eBillingResponseStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  eBillingResponseStatus: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EBillingResponseStatus',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ElectronicProtocol.cfDiCancellationReference} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cfDiCancellationReference: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CFDiCancellationReference',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of ElectronicProtocolField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ElectronicProtocol, fieldOptions);
  }
}

export namespace ElectronicProtocol {
  /**
   * Metadata information on all properties of the `ElectronicProtocol` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ElectronicProtocol>[] = [
    {
      originalName: 'ProtocolCode',
      name: 'protocolCode',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'GenerationType',
      name: 'generationType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'MappingID',
      name: 'mappingId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TestingMode',
      name: 'testingMode',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Confirmation',
      name: 'confirmation',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EDocType',
      name: 'eDocType',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CFDiCancellationReason',
      name: 'cfDiCancellationReason',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CFDiCancellationResponse',
      name: 'cfDiCancellationResponse',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RelatedDocuments',
      name: 'relatedDocuments',
      type: RelatedDocument,
      isCollection: true
    },
    {
      originalName: 'EBooksRelevant',
      name: 'eBooksRelevant',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'EBooksMARK',
      name: 'eBooksMark',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EBooksMARKofNegative',
      name: 'eBooksMarKofNegative',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EBooksInvoiceType',
      name: 'eBooksInvoiceType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EBooksInvoiceTypeofNegative',
      name: 'eBooksInvoiceTypeofNegative',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EBillingIRN',
      name: 'eBillingIrn',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EETPKP',
      name: 'eetpkp',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EETBKP',
      name: 'eetbkp',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SignatureInputMessage',
      name: 'signatureInputMessage',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SignatureDigest',
      name: 'signatureDigest',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FechaTimbrado',
      name: 'fechaTimbrado',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SelloSAT',
      name: 'selloSat',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PaymentMethod',
      name: 'paymentMethod',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'RfcProvCertif',
      name: 'rfcProvCertif',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'NoCertificadoSAT',
      name: 'noCertificadoSat',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FPASequenceNumber',
      name: 'fpaSequenceNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'FPASendDateSDI',
      name: 'fpaSendDateSdi',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'FPAProgressivo',
      name: 'fpaProgressivo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ProtocolDescription',
      name: 'protocolDescription',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CFDiExport',
      name: 'cfDiExport',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EBillingAckNo',
      name: 'eBillingAckNo',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EBillingAckDt',
      name: 'eBillingAckDt',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EBillingSignedInvoice',
      name: 'eBillingSignedInvoice',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EBillingSignedQRCode',
      name: 'eBillingSignedQrCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EBillingResponseStatus',
      name: 'eBillingResponseStatus',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CFDiCancellationReference',
      name: 'cfDiCancellationReference',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
