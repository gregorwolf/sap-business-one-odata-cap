/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DocsInWtGroups
 */
export interface DocsInWtGroups {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Doc Obj Type.
   * @nullable
   */
  docObjType?: string;
  /**
   * Vat Amount.
   * @nullable
   */
  vatAmount?: number;
  /**
   * Doc Total.
   * @nullable
   */
  docTotal?: number;
  /**
   * Base Amount.
   * @nullable
   */
  baseAmount?: number;
  /**
   * Accum Amount.
   * @nullable
   */
  accumAmount?: number;
  /**
   * Percept Amount.
   * @nullable
   */
  perceptAmount?: number;
  /**
   * Percent.
   * @nullable
   */
  percent?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DocsInWtGroups.build]] instead.
 */
export function createDocsInWtGroups(json: any): DocsInWtGroups {
  return DocsInWtGroups.build(json);
}

/**
 * DocsInWtGroupsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocsInWtGroupsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocsInWtGroups> {
  /**
   * Representation of the [[DocsInWtGroups.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DocsInWtGroups.docObjType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docObjType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocObjType', this, 'Edm.String');
  /**
   * Representation of the [[DocsInWtGroups.vatAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('VATAmount', this, 'Edm.Double');
  /**
   * Representation of the [[DocsInWtGroups.docTotal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docTotal: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocTotal', this, 'Edm.Double');
  /**
   * Representation of the [[DocsInWtGroups.baseAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseAmount', this, 'Edm.Double');
  /**
   * Representation of the [[DocsInWtGroups.accumAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AccumAmount', this, 'Edm.Double');
  /**
   * Representation of the [[DocsInWtGroups.perceptAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  perceptAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PerceptAmount', this, 'Edm.Double');
  /**
   * Representation of the [[DocsInWtGroups.percent]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percent: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Percent', this, 'Edm.Double');

  /**
   * Creates an instance of DocsInWtGroupsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DocsInWtGroups);
  }
}

export namespace DocsInWtGroups {
  /**
   * Metadata information on all properties of the `DocsInWtGroups` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocsInWtGroups>[] = [{
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocObjType',
    name: 'docObjType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'VATAmount',
    name: 'vatAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DocTotal',
    name: 'docTotal',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'BaseAmount',
    name: 'baseAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AccumAmount',
    name: 'accumAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'PerceptAmount',
    name: 'perceptAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Percent',
    name: 'percent',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DocsInWtGroups {
    return deserializeComplexTypeV4(json, DocsInWtGroups);
  }
}
