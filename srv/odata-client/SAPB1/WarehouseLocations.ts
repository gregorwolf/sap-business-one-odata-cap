/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { BoGstRegnTypeEnum } from './BoGstRegnTypeEnum';
import { Warehouses, WarehousesType } from './Warehouses';
import { Items, ItemsType } from './Items';
import {
  WithholdingTaxCodes,
  WithholdingTaxCodesType
} from './WithholdingTaxCodes';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { CertificateSeries, CertificateSeriesType } from './CertificateSeries';
import { PaymentDrafts, PaymentDraftsType } from './PaymentDrafts';
import { Countries, CountriesType } from './Countries';
import { IncomingPayments, IncomingPaymentsType } from './IncomingPayments';
import { VendorPayments, VendorPaymentsType } from './VendorPayments';

/**
 * This class represents the entity "WarehouseLocations" of service "SAPB1".
 */
export class WarehouseLocations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WarehouseLocationsType<T>
{
  /**
   * Technical entity name for WarehouseLocations.
   */
  static _entityName = 'WarehouseLocations';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseLocations entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lstvat Number.
   * @nullable
   */
  lstvatNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cst Number.
   * @nullable
   */
  cstNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exemption Number.
   * @nullable
   */
  exemptionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tan Number.
   * @nullable
   */
  tanNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Tax Number.
   * @nullable
   */
  serviceTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assessee Type.
   * @nullable
   */
  assesseeType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Type.
   * @nullable
   */
  companyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nature Of Business.
   * @nullable
   */
  natureOfBusiness?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tin Number.
   * @nullable
   */
  tinNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Registration Type.
   * @nullable
   */
  registrationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ecc Number.
   * @nullable
   */
  eccNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ce Range.
   * @nullable
   */
  ceRange?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ce Division.
   * @nullable
   */
  ceDivision?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ce Commissionerate.
   * @nullable
   */
  ceCommissionerate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manufacturer Code.
   * @nullable
   */
  manufacturerCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Jurisdiction.
   * @nullable
   */
  jurisdiction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street.
   * @nullable
   */
  street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Block.
   * @nullable
   */
  block?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zip Code.
   * @nullable
   */
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * @nullable
   */
  city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County.
   * @nullable
   */
  county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pan Number.
   * @nullable
   */
  panNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ce Register Number.
   * @nullable
   */
  ceRegisterNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Building Floor Room.
   * @nullable
   */
  buildingFloorRoom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gstin.
   * @nullable
   */
  gstin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gst Type.
   * @nullable
   */
  gstType?: BoGstRegnTypeEnum | null;
  /**
   * Gsttds.
   * @nullable
   */
  gsttds?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gstisd.
   * @nullable
   */
  gstisd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Warehouses} entity.
   */
  warehouses!: Warehouses<T>[];
  /**
   * One-to-many navigation property to the {@link Items} entity.
   */
  items!: Items<T>[];
  /**
   * One-to-many navigation property to the {@link WithholdingTaxCodes} entity.
   */
  withholdingTaxCodes!: WithholdingTaxCodes<T>[];
  /**
   * One-to-many navigation property to the {@link JournalEntries} entity.
   */
  journalEntries!: JournalEntries<T>[];
  /**
   * One-to-many navigation property to the {@link CertificateSeries} entity.
   */
  certificateSeries!: CertificateSeries<T>[];
  /**
   * One-to-many navigation property to the {@link PaymentDrafts} entity.
   */
  paymentDrafts!: PaymentDrafts<T>[];
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country2?: Countries<T> | null;
  /**
   * One-to-many navigation property to the {@link IncomingPayments} entity.
   */
  incomingPayments!: IncomingPayments<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPayments} entity.
   */
  vendorPayments!: VendorPayments<T>[];

  constructor(readonly _entityApi: WarehouseLocationsApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseLocationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  lstvatNumber?: DeserializedType<T, 'Edm.String'> | null;
  cstNumber?: DeserializedType<T, 'Edm.String'> | null;
  exemptionNumber?: DeserializedType<T, 'Edm.String'> | null;
  tanNumber?: DeserializedType<T, 'Edm.String'> | null;
  serviceTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  assesseeType?: DeserializedType<T, 'Edm.String'> | null;
  companyType?: DeserializedType<T, 'Edm.String'> | null;
  natureOfBusiness?: DeserializedType<T, 'Edm.String'> | null;
  tinNumber?: DeserializedType<T, 'Edm.String'> | null;
  registrationType?: DeserializedType<T, 'Edm.String'> | null;
  eccNumber?: DeserializedType<T, 'Edm.String'> | null;
  ceRange?: DeserializedType<T, 'Edm.String'> | null;
  ceDivision?: DeserializedType<T, 'Edm.String'> | null;
  ceCommissionerate?: DeserializedType<T, 'Edm.String'> | null;
  manufacturerCode?: DeserializedType<T, 'Edm.String'> | null;
  jurisdiction?: DeserializedType<T, 'Edm.String'> | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  block?: DeserializedType<T, 'Edm.String'> | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  panNumber?: DeserializedType<T, 'Edm.String'> | null;
  ceRegisterNumber?: DeserializedType<T, 'Edm.String'> | null;
  buildingFloorRoom?: DeserializedType<T, 'Edm.String'> | null;
  gstin?: DeserializedType<T, 'Edm.String'> | null;
  gstType?: BoGstRegnTypeEnum | null;
  gsttds?: DeserializedType<T, 'Edm.String'> | null;
  gstisd?: DeserializedType<T, 'Edm.String'> | null;
  warehouses: WarehousesType<T>[];
  items: ItemsType<T>[];
  withholdingTaxCodes: WithholdingTaxCodesType<T>[];
  journalEntries: JournalEntriesType<T>[];
  certificateSeries: CertificateSeriesType<T>[];
  paymentDrafts: PaymentDraftsType<T>[];
  country2?: CountriesType<T> | null;
  incomingPayments: IncomingPaymentsType<T>[];
  vendorPayments: VendorPaymentsType<T>[];
}
