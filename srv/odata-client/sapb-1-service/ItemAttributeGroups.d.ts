import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ItemAttributeGroups
 */
export interface ItemAttributeGroups {
    /**
     * Attribute 1.
     * @nullable
     */
    attribute1?: string;
    /**
     * Attribute 2.
     * @nullable
     */
    attribute2?: string;
    /**
     * Attribute 3.
     * @nullable
     */
    attribute3?: string;
    /**
     * Attribute 4.
     * @nullable
     */
    attribute4?: string;
    /**
     * Attribute 5.
     * @nullable
     */
    attribute5?: string;
    /**
     * Attribute 6.
     * @nullable
     */
    attribute6?: string;
    /**
     * Attribute 7.
     * @nullable
     */
    attribute7?: string;
    /**
     * Attribute 8.
     * @nullable
     */
    attribute8?: string;
    /**
     * Attribute 9.
     * @nullable
     */
    attribute9?: string;
    /**
     * Attribute 10.
     * @nullable
     */
    attribute10?: string;
    /**
     * Attribute 11.
     * @nullable
     */
    attribute11?: string;
    /**
     * Attribute 12.
     * @nullable
     */
    attribute12?: string;
    /**
     * Attribute 13.
     * @nullable
     */
    attribute13?: string;
    /**
     * Attribute 14.
     * @nullable
     */
    attribute14?: string;
    /**
     * Attribute 15.
     * @nullable
     */
    attribute15?: string;
    /**
     * Attribute 16.
     * @nullable
     */
    attribute16?: string;
    /**
     * Attribute 17.
     * @nullable
     */
    attribute17?: string;
    /**
     * Attribute 18.
     * @nullable
     */
    attribute18?: string;
    /**
     * Attribute 19.
     * @nullable
     */
    attribute19?: string;
    /**
     * Attribute 20.
     * @nullable
     */
    attribute20?: string;
    /**
     * Attribute 21.
     * @nullable
     */
    attribute21?: string;
    /**
     * Attribute 22.
     * @nullable
     */
    attribute22?: string;
    /**
     * Attribute 23.
     * @nullable
     */
    attribute23?: string;
    /**
     * Attribute 24.
     * @nullable
     */
    attribute24?: string;
    /**
     * Attribute 25.
     * @nullable
     */
    attribute25?: string;
    /**
     * Attribute 26.
     * @nullable
     */
    attribute26?: string;
    /**
     * Attribute 27.
     * @nullable
     */
    attribute27?: string;
    /**
     * Attribute 28.
     * @nullable
     */
    attribute28?: string;
    /**
     * Attribute 29.
     * @nullable
     */
    attribute29?: string;
    /**
     * Attribute 30.
     * @nullable
     */
    attribute30?: string;
    /**
     * Attribute 31.
     * @nullable
     */
    attribute31?: string;
    /**
     * Attribute 32.
     * @nullable
     */
    attribute32?: string;
    /**
     * Attribute 33.
     * @nullable
     */
    attribute33?: number;
    /**
     * Attribute 34.
     * @nullable
     */
    attribute34?: number;
    /**
     * Attribute 35.
     * @nullable
     */
    attribute35?: number;
    /**
     * Attribute 36.
     * @nullable
     */
    attribute36?: number;
    /**
     * Attribute 37.
     * @nullable
     */
    attribute37?: number;
    /**
     * Attribute 38.
     * @nullable
     */
    attribute38?: number;
    /**
     * Attribute 39.
     * @nullable
     */
    attribute39?: number;
    /**
     * Attribute 40.
     * @nullable
     */
    attribute40?: number;
    /**
     * Attribute 41.
     * @nullable
     */
    attribute41?: number;
    /**
     * Attribute 42.
     * @nullable
     */
    attribute42?: number;
    /**
     * Attribute 43.
     * @nullable
     */
    attribute43?: Moment;
    /**
     * Attribute 44.
     * @nullable
     */
    attribute44?: Moment;
    /**
     * Attribute 45.
     * @nullable
     */
    attribute45?: Moment;
    /**
     * Attribute 46.
     * @nullable
     */
    attribute46?: Moment;
    /**
     * Attribute 47.
     * @nullable
     */
    attribute47?: Moment;
    /**
     * Attribute 48.
     * @nullable
     */
    attribute48?: number;
    /**
     * Attribute 49.
     * @nullable
     */
    attribute49?: number;
    /**
     * Attribute 50.
     * @nullable
     */
    attribute50?: number;
    /**
     * Attribute 51.
     * @nullable
     */
    attribute51?: number;
    /**
     * Attribute 52.
     * @nullable
     */
    attribute52?: number;
    /**
     * Attribute 53.
     * @nullable
     */
    attribute53?: number;
    /**
     * Attribute 54.
     * @nullable
     */
    attribute54?: number;
    /**
     * Attribute 55.
     * @nullable
     */
    attribute55?: number;
    /**
     * Attribute 56.
     * @nullable
     */
    attribute56?: number;
    /**
     * Attribute 57.
     * @nullable
     */
    attribute57?: number;
    /**
     * Attribute 58.
     * @nullable
     */
    attribute58?: number;
    /**
     * Attribute 59.
     * @nullable
     */
    attribute59?: number;
    /**
     * Attribute 60.
     * @nullable
     */
    attribute60?: number;
    /**
     * Attribute 61.
     * @nullable
     */
    attribute61?: number;
    /**
     * Attribute 62.
     * @nullable
     */
    attribute62?: number;
    /**
     * Attribute 63.
     * @nullable
     */
    attribute63?: number;
    /**
     * Attribute 64.
     * @nullable
     */
    attribute64?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ItemAttributeGroups.build]] instead.
 */
export declare function createItemAttributeGroups(json: any): ItemAttributeGroups;
/**
 * ItemAttributeGroupsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ItemAttributeGroupsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ItemAttributeGroups.attribute1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute6]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute6: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute7]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute7: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute8]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute8: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute9]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute9: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute10]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute10: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute11]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute11: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute12]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute12: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute13]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute13: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute14]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute14: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute15]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute15: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute16]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute16: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute17]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute17: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute18]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute18: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute19]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute19: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute20]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute20: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute21]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute21: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute22]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute22: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute23]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute23: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute24]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute24: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute25]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute25: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute26]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute26: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute27]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute27: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute28]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute28: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute29]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute29: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute30]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute30: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute31]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute31: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute32]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute32: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute33]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute33: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute34]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute34: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute35]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute35: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute36]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute36: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute37]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute37: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute38]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute38: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute39]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute39: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute40]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute40: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute41]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute41: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute42]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute42: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute43]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute43: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute44]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute44: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute45]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute45: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute46]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute46: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute47]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute47: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute48]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute48: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute49]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute49: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute50]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute50: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute51]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute51: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute52]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute52: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute53]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute53: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute54]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute54: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute55]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute55: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute56]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute56: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute57]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute57: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute58]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute58: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute59]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute59: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute60]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute60: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute61]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute61: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute62]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute62: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute63]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute63: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ItemAttributeGroups.attribute64]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    attribute64: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ItemAttributeGroups {
    function build(json: {
        [keys: string]: FieldType;
    }): ItemAttributeGroups;
}
//# sourceMappingURL=ItemAttributeGroups.d.ts.map