/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BusinessPlaceTributaryInfo
 */
export interface BusinessPlaceTributaryInfo {
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
  /**
   * Tributary Id.
   * @nullable
   */
  tributaryId?: number;
  /**
   * Tributary Type.
   * @nullable
   */
  tributaryType?: number;
  /**
   * Tt Start Date.
   * @nullable
   */
  ttStartDate?: Moment;
  /**
   * Tt End Date.
   * @nullable
   */
  ttEndDate?: Moment;
  /**
   * Tributary Regime Code.
   * @nullable
   */
  tributaryRegimeCode?: number;
  /**
   * Trc Start Date.
   * @nullable
   */
  trcStartDate?: Moment;
  /**
   * Trc End Date.
   * @nullable
   */
  trcEndDate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[BusinessPlaceTributaryInfo.build]] instead.
 */
export function createBusinessPlaceTributaryInfo(json: any): BusinessPlaceTributaryInfo {
  return BusinessPlaceTributaryInfo.build(json);
}

/**
 * BusinessPlaceTributaryInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BusinessPlaceTributaryInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BusinessPlaceTributaryInfo.bplid]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplid: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BPLID', this, 'Edm.Int32');
  /**
   * Representation of the [[BusinessPlaceTributaryInfo.tributaryId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tributaryId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TributaryID', this, 'Edm.Int32');
  /**
   * Representation of the [[BusinessPlaceTributaryInfo.tributaryType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tributaryType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TributaryType', this, 'Edm.Int32');
  /**
   * Representation of the [[BusinessPlaceTributaryInfo.ttStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ttStartDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('TTStartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BusinessPlaceTributaryInfo.ttEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ttEndDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('TTEndDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BusinessPlaceTributaryInfo.tributaryRegimeCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tributaryRegimeCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TributaryRegimeCode', this, 'Edm.Int32');
  /**
   * Representation of the [[BusinessPlaceTributaryInfo.trcStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trcStartDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('TRCStartDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BusinessPlaceTributaryInfo.trcEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trcEndDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('TRCEndDate', this, 'Edm.DateTimeOffset');
}

export namespace BusinessPlaceTributaryInfo {
  export function build(json: { [keys: string]: FieldType }): BusinessPlaceTributaryInfo {
    return createComplexType(json, {
      BPLID: (bplid: number) => ({ bplid: edmToTs(bplid, 'Edm.Int32') }),
      TributaryID: (tributaryId: number) => ({ tributaryId: edmToTs(tributaryId, 'Edm.Int32') }),
      TributaryType: (tributaryType: number) => ({ tributaryType: edmToTs(tributaryType, 'Edm.Int32') }),
      TTStartDate: (ttStartDate: Moment) => ({ ttStartDate: edmToTs(ttStartDate, 'Edm.DateTimeOffset') }),
      TTEndDate: (ttEndDate: Moment) => ({ ttEndDate: edmToTs(ttEndDate, 'Edm.DateTimeOffset') }),
      TributaryRegimeCode: (tributaryRegimeCode: number) => ({ tributaryRegimeCode: edmToTs(tributaryRegimeCode, 'Edm.Int32') }),
      TRCStartDate: (trcStartDate: Moment) => ({ trcStartDate: edmToTs(trcStartDate, 'Edm.DateTimeOffset') }),
      TRCEndDate: (trcEndDate: Moment) => ({ trcEndDate: edmToTs(trcEndDate, 'Edm.DateTimeOffset') })
    });
  }
}
